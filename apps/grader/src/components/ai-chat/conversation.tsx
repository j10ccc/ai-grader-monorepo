import { Button, Input } from "antd";

interface IProps {
  title: string;
  onClose: () => void;
}

export default function AIConversation(props: IProps) {
  const { onClose, title } = props;

  return (
    <div className="h-lg w-md border-2px border-solid border-blue rd-4 bg-white shadow-lg flex flex-col">
      <div className="flex px-lg pt-xs">
        <div>{title}</div>
        <div className="flex-auto" />
        <button onClick={onClose}>close</button>
      </div>
      <hr className="mx-lg opacity-60 mt-sm" />
      <div className="flex-auto overflow-auto">

      </div>
      <form className="flex p-sm gap-xs">
        <Input placeholder="你可以问我..." name="content" className="rd-4 flex-auto" />
        <Button type="primary" shape="round">发送</Button>
      </form>
    </div>
  );
}