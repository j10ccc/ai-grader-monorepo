import { Suspense, lazy, memo, useState } from "react";
import { createPortal } from "react-dom";

const AIConversation = lazy(() => import("./conversation"));

interface IProps {
  title: string;
}

function Trigger(props: IProps) {
  const { title } = props;
  const [showChat, setShowChat] = useState(false);

  function handleClick() {
    setShowChat(true);
  }

  return (
    <div className="absolute bottom-8 right-8 z-6000">
      {showChat ?
        createPortal(
          <div className="absolute bottom-8 right-8 z-20">
            <Suspense>
              <AIConversation title={title} onClose={() => setShowChat(false)} />
            </Suspense>
          </div>
          , document.body
        ) :
        <button
          className="bg-white font-500 c-blue px-lg py-2 border-solid border-blue rd-16 shadow-lg border-none cursor-pointer"
          onClick={handleClick}
        >
          我可以帮你分析...
        </button>
      }
    </div>
  );
}

const AIChatTrigger = memo(Trigger);

export default AIChatTrigger;