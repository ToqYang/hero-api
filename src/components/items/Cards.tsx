import { Card } from "./Card";

export const Cards = ({ response, edit = false }: any) => {
  console.log("response: ", typeof response);
  return (
    <div className="articles">
      {response &&
        response.map((item: any) => (
          <Card edit={edit} key={item.id} item={item} />
        ))}
    </div>
  );
};
