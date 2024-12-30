import "./nfTag.scss";

interface NFTagPropType {
  variant: "outline" | "full" | "text-only";
  text?: string;
  tagType: "normal" | "error" | "warn" | "success";
  borderType: "square" | "rounded" | "circle";
  sx?: string;
  linkTo?: string;
}

const NFTag = (props: NFTagPropType) => {
  const { variant, text, tagType, borderType, sx, linkTo } = props;
  const classList = `nf-tag nf-tag--${variant} ${borderType} ${tagType} ${sx}`;
  return (
    <div className={classList}>
      {linkTo ? <a href={linkTo}>{text}</a> : <span>{text}</span>}
    </div>
  );
};

export default NFTag;
