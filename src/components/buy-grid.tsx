import { Card } from "@nextui-org/card";

export default function BuyGrid() {
  return (
    <div className="bg-black/65">
      <Card isBlurred className="grid grid-cols-1 space-y-4 md:grid-cols-2">
        <div>+1</div>
        <div>+5</div>

        <div>+10</div>
        <div>+50</div>
      </Card>
    </div>
  );
}
