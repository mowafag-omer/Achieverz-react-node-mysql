import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap' 

const EmProjects = () => {
  const [key, setKey] = useState('home')
  console.log(key);

  return (
    <div className="p-4 w-75" style={{minHeight: '71.5vh'}}>
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="home" title="Home">
          <p>
            Accuse me thus: that I have scanted all, Wherein I should your great deserts repay, 
            Forgot upon your dearest love to call, Whereto all bonds do tie me day by day; 
            That I have frequent been with unknown minds, And given to time your own dear-purchas'd right; 
            That I have hoisted sail to all the winds Which should transport me farthest from your sight. 
            Book both my wilfulness and errors down, And on just proof surmise, accumulate;
          </p>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <p>
            Accuse me thus: that I have scanted all, Wherein I should your great deserts repay, 
            Forgot upon your dearest love to call, Whereto all bonds do tie me day by day; 
            That I have frequent been with unknown minds, And given to time your own dear-purchas'd right; 
            That I have hoisted sail to all the winds Which should transport me farthest from your sight. 
            Book both my wilfulness and errors down, And on just proof surmise, accumulate;
          </p>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <p>
            Accuse me thus: that I have scanted all, Wherein I should your great deserts repay, 
            Forgot upon your dearest love to call, Whereto all bonds do tie me day by day; 
            That I have frequent been with unknown minds, And given to time your own dear-purchas'd right; 
            That I have hoisted sail to all the winds Which should transport me farthest from your sight. 
            Book both my wilfulness and errors down, And on just proof surmise, accumulate;
          </p>
        </Tab>
      </Tabs>
    </div>
  )
}

export default EmProjects