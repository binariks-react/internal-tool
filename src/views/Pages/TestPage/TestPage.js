import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'views/Components/Controls/Button';
import ProgressBar from 'views/Components/Controls/ProgressBar';
import Switch from 'views/Components/Controls/Switch';

const Wrapper = styled.div`
  button + button {
    margin-left: 20px;
  }
  div + div {
    margin-top: 20px;
  }
`;

const TestPage = () => {
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(true);
  return (
    <Wrapper>
      <div>
        <Button color="primary">Hello</Button>
        <Button color="secondary">Hello</Button>
        <Button color="success">Hello</Button>
        <Button color="info">Hello</Button>
        <Button color="danger">Hello</Button>
        <Button color="warning">Hello</Button>
        <Button color="dark">Hello</Button>
        <Button color="white">Hello</Button>
        <Button color="royalBlue">Hello</Button>
        <Button color="java">Hello</Button>
        <Button color="salmon">Hello</Button>
      </div>
      <div>
        <Button fill="outline" color="primary">Hello</Button>
        <Button fill="outline" color="secondary">Hello</Button>
        <Button fill="outline" color="success">Hello</Button>
        <Button fill="outline" color="info">Hello</Button>
        <Button fill="outline" color="danger">Hello</Button>
        <Button fill="outline" color="warning">Hello</Button>
        <Button fill="outline" color="dark">Hello</Button>
        <Button fill="outline" color="white">Hello</Button>
        <Button fill="outline" color="royalBlue">Hello</Button>
        <Button fill="outline" color="java">Hello</Button>
        <Button fill="outline" color="salmon">Hello</Button>
      </div>
      <div>
        <Button small color="primary">Hello</Button>
        <Button small color="secondary">Hello</Button>
        <Button small color="success">Hello</Button>
        <Button small color="info">Hello</Button>
        <Button small color="danger">Hello</Button>
        <Button small color="warning">Hello</Button>
        <Button small color="dark">Hello</Button>
        <Button small color="white">Hello</Button>
        <Button small color="royalBlue">Hello</Button>
        <Button small color="java">Hello</Button>
        <Button small color="salmon">Hello</Button>
      </div>
      <div>
        <Button fill="outline" small color="primary">Hello</Button>
        <Button fill="outline" small color="secondary">Hello</Button>
        <Button fill="outline" small color="success">Hello</Button>
        <Button fill="outline" small color="info">Hello</Button>
        <Button fill="outline" small color="danger">Hello</Button>
        <Button fill="outline" small color="warning">Hello</Button>
        <Button fill="outline" small color="dark">Hello</Button>
        <Button fill="outline" small color="white">Hello</Button>
        <Button fill="outline" small color="royalBlue">Hello</Button>
        <Button fill="outline" small color="java">Hello</Button>
        <Button fill="outline" small color="salmon">Hello</Button>
      </div>
      <div>
        <ProgressBar color="primary" min={-200} max={200} value={-125} />
        <ProgressBar color="secondary" min={0} max={50} value={25} />
        <ProgressBar color="success" min={50} max={150} value={125} />
        <ProgressBar color="danger" min={5} max={25} value={30} />
        <ProgressBar color="warning" min={5} max={25} value={4} />
        <ProgressBar color="info" min={250} max={150} value={175} />
      </div>
      <div>
        <Switch checked={check} onClick={setCheck} title="test" />
        <Switch checked={check1} onClick={setCheck1} />
        <Switch checked={check2} onClick={setCheck2} disable title="disabled" />
        <Switch checked={check3} onClick={setCheck3} disable title="disabled" />
      </div>
    </Wrapper>
  );
};


export default TestPage;

