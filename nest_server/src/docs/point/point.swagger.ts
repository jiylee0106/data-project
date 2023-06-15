import {
  GetAllPointLogsResponseDto,
  GetCampaignLogsResponseDto,
  GetDailyEventsLogsResponseDto,
  GetPointResponseDto,
} from 'src/point/dto/point.response.dto';

const logDescription =
  '로그 정보 제공\n\n 제공된 정보: \n - `id`: 고유 로그 ID \n - `userId`: 유저 ID \n - `points`: 적립/소모 포인트 \n - `action_type`: 적립/소모 여부 \n - `method`: 적립/소모 행동양식 \n - `event_date`: 이벤트 발생 시간';

const PointResponse = {
  status: 200,
  description:
    '보유 포인트 정보 제공\n\n 제공된 정보: \n - `point`: 보유 포인트',
  type: GetPointResponseDto,
};

const GetAllPointLogsResponse = {
  status: 200,
  description: logDescription,
  type: GetAllPointLogsResponseDto,
};

const GetCampaignLogsResponse = {
  status: 200,
  description: logDescription,
  type: GetCampaignLogsResponseDto,
};

const GetDailyEventsLogsResponse = {
  status: 200,
  description: logDescription,
  type: GetDailyEventsLogsResponseDto,
};

export {
  PointResponse,
  GetAllPointLogsResponse,
  GetCampaignLogsResponse,
  GetDailyEventsLogsResponse,
};
