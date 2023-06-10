import AdminCampaign from "./AdminCampaign";
import AdminNews from "./AdminNews";
import AdminParticipation from "./AdminParticipation";
import AdminVideo from "./AdminVideo";

const AdminContent = ({ tab }) => {
  return (
    <>
      {(tab === 0 && <AdminNews />) ||
        (tab === 1 && <AdminVideo />) ||
        (tab === 2 && <AdminCampaign />) ||
        (tab === 3 && <AdminParticipation />)}
      <div>123</div>
    </>
  );
};

export default AdminContent;
