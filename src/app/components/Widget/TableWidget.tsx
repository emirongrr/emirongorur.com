import { TableValueProps } from "@components/Blog/Types/table";
import { TablePreview } from "@sanity/table";
import { PreviewProps } from "sanity";

export function TableWidget(props: TableValueProps & PreviewProps) {
  const { table, caption, title, ...rest } = props;
  const tablePreviewProps = { ...rest, rows: table?.rows || [] };

  return (
    <>
      <div className="px-3">
        {title && (
          <h3 className="text-lg font-bold mb-1">
            {typeof title === "string" ? title : String(title)}
          </h3>
        )}
        <em className="not-italic text-sm font-semibold">
          {caption ?? "Untitled Table"}
        </em>
      </div>
      <TablePreview {...tablePreviewProps} description={caption} />
    </>
  );
}