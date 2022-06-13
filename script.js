// const channel = {
//   title: "Javascript",
//   subscribe() {
//     console.log(this);
//   },
// };
// function Share(channel_title) {
//   this.channel_title = channel_title;
//   console.log(this);
// }
// // channel.subscribe();
// const sharevideo = new Share("Javascript");

const channel = {
  title: "Javascript",
  video_title: "Cyberdude",
  names: ["gokul", "raj", "casper"],
  subscribe() {
    console.log(this);
  },
  showVideos() {
    this.names.forEach(function (Name) {
      console.log(this.video_title + ` - ` + Name.toUpperCase());
    }, this);
  },
};
channel.showVideos();
