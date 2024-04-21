import { useNavigate } from 'react-router-dom';

const navigateToReport = () => {
  const navigate = useNavigate();
  navigate('/');
}

export default navigateToReport
