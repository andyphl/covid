import { useParams } from "react-router-dom";

const CountryPage = () => {
  const params = useParams();

  return <div>{params.country}</div>;
};

export default CountryPage;
