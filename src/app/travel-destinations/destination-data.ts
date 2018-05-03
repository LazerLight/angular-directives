export class Destination {
  constructor(
    public id: string,
    public name: string,
    public imageUrl: string
  ) { }
}

export const destinationList: Array<Destination> = [
  new Destination("zeal", "New Zealand", "https://media.giphy.com/media/3o6ZtluYTKJeXXqt8s/giphy.gif"),
  new Destination("jap", "Japan", "https://media.giphy.com/media/H31VnwaffLwmk/giphy.gif"),
  new Destination("tanz", "Tanzania", "https://media.giphy.com/media/CTZwNgIrqJnby/giphy.gif"),
  new Destination("ir", "Iran", "https://media.giphy.com/media/z9DGNHmHzSTx6/giphy.gif"),
  new Destination("sey", "Seychelles", "https://media.giphy.com/media/xT9IgFNPbI0QX21OqQ/giphy.gif"),
  new Destination("maur", "Mauritius", "https://media.giphy.com/media/takoI3YGDabqE/giphy.gif")
];
