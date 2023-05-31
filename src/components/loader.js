import { json } from "react-router-dom";

export const loader = async (url,type) => {
    document.title=type;
    const res = await fetch(url);
    console.log(type);
    
    if (!res.ok) {
        throw json(
            // { message: `There was an error loading ${type} movies` },
            // { status: res.status }
            );
        } else {
      // const data = await res.json();
      return res;
    }
  };

