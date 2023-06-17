import { GetParticipationResponseDto } from '../../admin/participation/dto/participation.response.dto';
import { GetVideoResponseDto } from '../../admin/video/dto/video.response.dto';
import { GetNewsResponseDto } from '../../admin/news/dto/news.response.dto';
import { GetCampaignResponseDto } from '../../admin/campaign/dto/campaign.response.dto';

const GetVideoResponse = {
  status: 200,
  description:
    '컬렉션 정보 제공\n\n 제공된 정보: \n - `id`: 영상 로그 고유ID \n - `video_id`: 영상 재생 ID \n - `title`: 제목 \n - `description`: 설명 \n - `is_selected`: 선택 여부 \n - `created_at`: 생성 시간',
  type: GetVideoResponseDto,
};

const GetParticipationResponse = {
  status: 200,
  description:
    '동참 정보 제공\n\n 제공된 정보: \n - `id`: 동참 로그 고유ID  \n - `title`: 제목 \n - `description`: 설명 \n - `image_link`: 이미지 링크 \n - `is_selected`: 선택 여부 \n - `created_at`: 생성 시간',
  type: GetParticipationResponseDto,
};

const GetNewsResponse = {
  status: 200,
  description:
    '소식 정보 제공\n\n 제공된 정보: \n - `id`: 소식 로그 고유ID  \n - `title`: 제목 \n - `description`: 설명 \n - `link`: 소식 링크 \n - `image_link`: 이미지 링크 \n - `created_at`: 생성 시간',
  type: GetNewsResponseDto,
};

const GetCampaignResponse = {
  status: 200,
  description:
    '캠페인 정보 제공\n\n 제공된 정보: \n - `id`: 영상 로그 고유ID \n - `type`: 캠페인1~3 타입 \n - `title`: 제목 \n - `description`: 설명 \n - `image_link`: 이미지 링크 \n - `created_at`: 생성 시간',
  type: GetCampaignResponseDto,
};

export {
  GetVideoResponse,
  GetParticipationResponse,
  GetNewsResponse,
  GetCampaignResponse,
};
