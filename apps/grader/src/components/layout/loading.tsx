import { Spin } from "antd";

interface IProps {
  extraClassName?: string;
  title?: string;
}

export default function Loading(props: IProps) {
  const { extraClassName, title } = props;

  return (
    <div
      className={
        "absolute left-0 top-0 size-full flex flex-col gap-lg items-center justify-center z-999" +
        (extraClassName ? ` ${extraClassName}` : "")
      }
    >
      <Spin size="large" />
      <div>{ title ? title : "加载中..." }</div>
    </div>
  );
}