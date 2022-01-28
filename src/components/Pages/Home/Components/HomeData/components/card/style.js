import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles({
  cardContainer: {
    position: "relative",
    borderRadius: 20,
    padding: 30,
    backgroundImage:
      "url(https://images.assetsdelivery.com/compings_v2/allakuz/allakuz2109/allakuz210900285.jpg)",
    background: "rgba( 255, 255, 255, 0.25 )",
    boxShadow: "0 8px 32px 0 rgb(0 17 255 / 47%)",
    backdropFilter: "blur( 20px )",
    borderRadius: 10,
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
  detailContainer: {
    marginLeft: 20,
    maxWidth: 187,
  },
  houseImg: {
    height: 50,
    width: 50,
    borderRadius: "50%",
  },
  title: {
    color: "black",
    fontSize: 22,
    fontWeight: 600,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  subTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: 500,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  qr: {
    width: 50,
    marginBottom: 20,
    cursor: "pointer",
  },
  setting: {
    position: "absolute",
    right: "10px",
    top: "10px",
    color: "black",
  },
});
