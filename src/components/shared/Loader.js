import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div style={{width:"100%",height:"100px",display:"flex",justifyContent:"Center",padding:"25px"}} >
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
