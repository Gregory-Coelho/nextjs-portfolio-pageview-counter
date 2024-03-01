// types/md.d.ts
declare module "*.md" {
  let mdComponent: (props) => JSX.Element;
  export default mdComponent;
}
