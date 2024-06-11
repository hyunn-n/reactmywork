import React, {useState} from 'react';
import axios from 'axios';

const App = () => {

  const [data, setData] = useState(null);
  const onClick = async () => {           // await
    // 영화사
    const baseurl = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/company/searchCompanyList?';
    const mykey = '43c0ebe1b1cd426514be65e4e76d8b3d';
    const url = `${baseurl}key=${mykey}`;

    try {
          const response = await axios.get(url);
          setData(response.data);
          console.log(response.data);
    } catch (e){
          console.log(e);
    }
  };

  return (
    <div className='Container'>
      <div>
        <button onClick={onClick}>영화사 불러오기</button>
      </div>
        {/* {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}  */}
        {data && data.companyListResult && data.data.companyListResult.companyList.map((company) => (
          // <div key = {company.companyNm}>
              {/* <p>{company.companyPartNames }</p> */}
              {company.companyNmEn && <p>{company.companyNmEn}</p>}

        
          //  </div>
        ))}
      </div>
  );
};

export default App;