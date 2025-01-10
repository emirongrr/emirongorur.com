"use client";
import React, { useEffect, useRef } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  AmbientLight,
  BufferGeometry,
  Vector3,
  MeshStandardMaterial,
  Mesh,
  Clock,
  Color,
} from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

const EthereumLogo: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMountRef = mountRef.current;
    const clock = new Clock();

    const scene = new Scene();
    const camera = new PerspectiveCamera(
      60,
      currentMountRef.clientWidth / currentMountRef.clientHeight,
      1,
      1000,
    );
    camera.position.set(0, 0, 10);

    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMountRef.clientWidth, currentMountRef.clientHeight);
    currentMountRef.appendChild(renderer.domElement);

    const light = new DirectionalLight(0xffffff, 1);
    light.position.setScalar(1);
    scene.add(light, new AmbientLight(0xffffff, 0.5));

    const makePart = (pts: number[][]) => {
      const geometry = new BufferGeometry().setFromPoints(
        pts.map((p) => new Vector3(p[0], p[1], p[2])),
      );
      geometry.setIndex([0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1]);
      geometry.computeVertexNormals();
      return geometry;
    };

    const gPartTop = makePart([
      [0, 1, 1],
      [0, -1, 0],
      [2, 0, 0],
      [0, 4, 0],
      [-2, 0, 0],
    ]);

    const gPartBottom = makePart([
      [0, -1.125, 0.5],
      [0, -3, 0],
      [2, 0, 0],
      [0, -1, 0],
      [-2, 0, 0],
    ]);
    gPartBottom.translate(0, -0.5, 0);

    const gFront = mergeGeometries([gPartTop, gPartBottom]);
    const gBack = gFront.clone();
    gBack.rotateY(Math.PI);

    let geometry = mergeGeometries([gFront, gBack]);
    geometry = geometry.toNonIndexed();
    geometry.computeVertexNormals();

    const material = new MeshStandardMaterial({
      color: 0x3c3c3d,
      emissive: new Color(0x3c3c3d),
      metalness: 0.5,
      roughness: 0.3,
    });
    const ethMesh = new Mesh(geometry, material);
    scene.add(ethMesh);

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      ethMesh.position.y = Math.sin(elapsedTime) * 0.5;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (currentMountRef) {
        const width = currentMountRef.clientWidth;
        const height = currentMountRef.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      currentMountRef.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default EthereumLogo;
