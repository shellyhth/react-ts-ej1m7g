import * as React from 'react';
import Photo from './Photo';
import Button from './Button';
import Message from './Message';
import Asset from './asset';

export default function Greeting() {
  return (
    // <div>
    //   <h1 style={{ fontFamily: 'Cursive' }}>Hello World</h1>
    //   <Button bgcolor="blue" text="click" />
    //   <Button bgcolor="yellow" text="click" />
    //   <Message text = "Message" font="cursive"/>
    //   <Photo />
    // </div>
    <div className="container">
      <div >
        <Asset
          imgUrl="https://www.bhg.com/thmb/3Vf9GXp3T-adDlU6tKpTbb-AEyE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
          description="dfgdf"
          price="200$/night"
        />

        <Asset
          imgUrl="https://www.jamesedition.com/stories/wp-content/uploads/2020/08/top-22-horis-1.png"
          description="dfgdf"
          price="200$/night"
        />
        <Asset
          imgUrl="https://www.jamesedition.com/stories/wp-content/uploads/2020/08/2.png"
          description="dfgdf"
          price="200$/night"
        />
      </div>
      <div>
        <Asset
          imgUrl="https://www.jamesedition.com/stories/wp-content/uploads/2020/08/2.png"
          description="dfgdf"
          price="200$/night"
        />
        <Asset
          imgUrl="https://www.jamesedition.com/stories/wp-content/uploads/2020/08/2.png"
          description="dfgdf"
          price="200$/night"
        /><Asset
        imgUrl="https://www.jamesedition.com/stories/wp-content/uploads/2020/08/2.png"
        description="dfgdf"
        price="200$/night"
      />
      </div>
    </div>
  );
}
