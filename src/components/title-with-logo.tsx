import { Card } from "@nextui-org/card";

export default function TitleWithLogo() {
  return (
    <div className="bg-black/65 rounded-xl">
      <Card
        isBlurred
        className="p-4 flex flex-col w-full justify-center items-center space-y-2"
      >
        <img src="/sortelancada-idea.svg" alt="sorte" />
      </Card>
    </div>
  );
}
