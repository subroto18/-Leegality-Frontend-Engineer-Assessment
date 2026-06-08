import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      icon={<ArrowLeftOutlined />}
      onClick={() => navigate(-1)}
      className="mb-8"
    >
      Back
    </Button>
  );
};

export default BackButton;
