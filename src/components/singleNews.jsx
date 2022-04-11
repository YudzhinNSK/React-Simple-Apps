import moment from "moment";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NewsOtherInformation, NewsOtherInformationItem, NewsTitle, NewsWrapper } from "../pages/styles/style";

export const SingleNews =
  ({
     news,
   }) => {

    return (
      <NewsWrapper>
        <NewsTitle>
          {news.title}
        </NewsTitle>
        <NewsOtherInformation>
          <NewsOtherInformationItem>
            <FavoriteIcon sx={{ marginRight: "3px", color: "red" }} />
            {news.points}
          </NewsOtherInformationItem>
          <NewsOtherInformationItem>
            <ModeCommentIcon sx={{ marginRight: "3px", color: "lightsteelblue" }} />
            {news.num_comments}
          </NewsOtherInformationItem>
          <NewsOtherInformationItem>
            <AccountCircleIcon sx={{ marginRight: "3px"}}/>
            {news.author}
          </NewsOtherInformationItem>
          <NewsOtherInformationItem>
            {moment(news.created_at).format("DD.MM.YYYY")}
          </NewsOtherInformationItem>
        </NewsOtherInformation>
      </NewsWrapper>
    );
  };