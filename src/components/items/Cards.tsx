import { Card } from "./Card";

export const Cards = ({ response, edit = false }: any) => {
  console.log("response: ", typeof response);
  return (
    <>
      {response && <h4>Results: ({response.length})</h4>}
      <div className="articles">
        {response &&
          response.map((item: any) => (
            <Card edit={edit} key={item.id} item={item} />
          ))}
      </div>
    </>
  );
};
