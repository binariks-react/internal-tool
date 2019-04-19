import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'views/Components/Controls/Button';
import Input from 'views/Components/Controls/Input';
import Select from 'views/Components/Controls/Select';
import FormGroup from 'views/Components/Controls/FormGroup';
import RadioButton from 'views/Components/Controls/RadioButton';
import ProgressBar from 'views/Components/Controls/ProgressBar';
import Switch from 'views/Components/Controls/Switch';
import Checkbox from '../../Components/Controls/Checkbox';
import Slider from '../../Components/Controls/Slider/Slider';
import { SLIDER_TYPE } from '../../Components/Controls/Slider/type';

const Content = styled.div`
  margin: 20px;

  div + div {
    margin-top: 20px;
  }
`;

const ContentSlider = styled.div`
  div + div {
    margin-top: 0px;
  }
`;

const options = [
  {
    value: 1,
    label: 'First',
  },
  {
    value: 2,
    label: 'Second',
  },
  {
    value: 3,
    label: 'Third',
  },
];

const TestPage = () => {
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(true);
  return (
    <Content>
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
      <div>
        <Checkbox label="label text" defaultChecked />
        <Checkbox label="label text" />
        <Checkbox label="label text" disabled />
        <Checkbox label="label text" defaultChecked disabled />
      </div>
      <div>
        <RadioButton title="Default" />
        <RadioButton title="Checked" defaultChecked />
        <RadioButton title="Disabled" disabled />
        <RadioButton title="Disabled Checked" disabled defaultChecked />
      </div>
      <div>
        <FormGroup>
          <Input type="text" placeholder="Text" />
          <Input type="password" placeholder="Password" />
          <Input type="text" placeholder="Input w/ icon" icon="@" />
          <Input type="text" placeholder="Input w/ true condition" condition message="Condition is correct" />
          <Input type="text" placeholder="Input w/ false condition" condition={false} message="Condition is incorrect" />
          <Select options={options} />
        </FormGroup>
      </div>

      <ContentSlider>
        <Slider
          sliderWidth={300}
          rangeValue={2000}
          type={SLIDER_TYPE.SINGLE}
          controllerValue={8000}
          rangeColour="success"
          getRange={range => range}
        />
        <Slider
          sliderWidth={300}
          rangeValue={2000}
          type={SLIDER_TYPE.SINGLE}
          controllerValue={70}
          showValue
          getRange={range => range}
        />
        <Slider
          sliderWidth={300}
          rangeValue={100}
          type={SLIDER_TYPE.DOUBLE}
          leftControllerValue={-100}
          rightControllerValue={200}
          minDistanceBetweenControllers={10}
          showValue
          getRange={range => range}
        />
      </ContentSlider>
    </Content>
  );
};


export default TestPage;
