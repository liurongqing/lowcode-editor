import { CommonComponentProps } from "../interface";
import { useMaterailDrop } from "@/app/hooks/useMaterialDrop";

export const Page = ({ id, name, children }: CommonComponentProps) => {
  const { canDrop, drop } = useMaterailDrop(["Button", "Container"], id);

  return (
    <div
      ref={drop as any}
      data-component-id={id}
      className="border min-h-[100px] p-5"
      style={{ border: canDrop ? "2px solid blue" : "none" }}
    >
      {children}
    </div>
  );
};
