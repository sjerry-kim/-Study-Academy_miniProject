import { useParams } from "react-router-dom";

const BaordNumPage = () => {
  const {page, num} = useParams();
  return ( 
    <div>
      <p>Page: {page}</p>
      <p>Num : {num}</p>
    </div>
  );
}

export default BaordNumPage;
