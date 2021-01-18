import React, { useState } from "react";
import { withTranslation } from "../../../i18n";
import PropTypes from "prop-types";
import { Layout } from "../../../components/Layout";
import SubscribeBar from "../../../components/Bricks/SubscribeBar/SubscribeBar";
import BannerLeft from "../../../components/Bricks/BannerLeft/BannerLeft";
import Text1 from "../../../components/Bricks/PrintSubscribeText/Text1";
import Text2 from "../../../components/Bricks/PrintSubscribeText/Text2";
import Text3 from "../../../components/Bricks/PrintSubscribeText/Text3";
import styles from "./steps.module.scss";

const Steps = () => {

  const [steps, setStep] = useState([
    { id: 'step1', 
      isTrue: true 
    },
    { id: 'step2',
      isTrue: false 
    },
    { id: 'step3',
      isTrue: false 
    },
  ]);
  // const [second, setSecond] = useState(false);
  const [type, setType] = useState("Home delivery");
  const [pack, setPack] = useState("6 days");
  const [current1, setCurrent1] = useState("(CURRENT)");
  const [current2, setCurrent2] = useState("");

  const firstStep = () => {
    let newStep = steps.map(item => 
    item.id === "step2" ? {...item, isTrue: !item.isTrue} : 
    {...item, isTrue: false})
    setStep(newStep);
    setCurrent1("✔");
    setCurrent2("(CURRENT)");
  };

  const nextStep = () => {
      let newStep = steps.map(item => 
      item.id === "step3" ? {...item, isTrue: !item.isTrue} : 
      {...item, isTrue: false})
      setStep(newStep);
      setCurrent2('✔')
  };
  const editDelivery = () => {
    let newStep = steps.map(item => 
      item.id === "step1" ? {...item, isTrue: true} : 
      {...item, isTrue: false})
      setStep(newStep);
    setCurrent1("(CURRENT)");
    setCurrent2("");
  };
  const editPackage = () => {
    let newStep = steps.map(item => 
      item.id === "step2" ? {...item, isTrue: true} : 
      {...item, isTrue: false})
      setStep(newStep);
    setCurrent2("(CURRENT)");
    setCurrent1("✔");
  };
  const setDeliveryType = (e) => {
    const value = e.target.dataset.value;
    setType(value);
  };
  const setPackType = (e) => {
    const value = e.target.dataset.value;
    setPack(value);
  };

  return (
    <Layout>
      <SubscribeBar
        onClickDelivery={editDelivery}
        onClickPackage={editPackage}
        typeValue={type}
        packValue={pack}
        current1={current1}
        current2={current2}
      />
      <div className={`${styles.container} container`}>
        <BannerLeft src="/static/images/subscribe-plan.png" />
        {steps[0].isTrue && (
          <Text1 onClick={firstStep} onClickType={setDeliveryType} />
        )}
        {steps[1].isTrue && (
          <Text2 onClick={nextStep} onClickPack={setPackType} />
        )}
        {steps[2].isTrue && <Text3 />}
      </div>
    </Layout>
  );
};
Steps.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Steps.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation(["common"])(Steps);
