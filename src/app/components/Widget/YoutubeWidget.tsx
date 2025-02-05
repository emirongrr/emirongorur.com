import { BiLogoYoutube } from "react-icons/bi";
import getYoutubeId from "../../utils/getYoutubeId";
import YoutubeIframe from "@components/YoutubeIFrame/youtube";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function YoutubeWidget(props: any) {
  const { url } = props;
  const id = getYoutubeId(url)!;

  return (
    <div className="pt-1 relative">
      {url ? (
        <>
          {props.renderDefault(props)}
          <YoutubeIframe videoId={id} />
        </>
      ) : (
        <div className="flex items-center justify-center gap-x-2 my-3">
          <BiLogoYoutube className="text-[red] text-lg" />
          <span>Add YouTube URL</span>
        </div>
      )}
    </div>
  );
}
