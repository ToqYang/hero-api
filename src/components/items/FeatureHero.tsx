import {
  Appearance,
  Biography,
  Connections,
  Powerstats,
  Work,
} from "../../interfaces/superheroes";

interface FeatureProps {
  item: Appearance | Biography | Connections | Powerstats | Work;
  title?: string;
}

export const FeatureHero = ({ item, title }: FeatureProps) => {
  return (
    <div>
      {title && <h3>{title}</h3>}
      {Object.entries(item)
        .map(([key, value]) => {
          if (!Array.isArray(value)) {
            return (
              <p>
                <strong style={{ color: "gray", fontWeight: "600" }}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </strong>
                : {value}
              </p>
            );
          }
          return false;
        })
        .filter(Boolean)}
    </div>
  );
};
