const { sendNotification } = require("../controllers/notificationController");

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class MoviePlatformObserver {
  update(data) {
    if (data._original && data._original.platform !== data.platform) {
      sendNotification(
        `Le film '${data.title}' a migré de ${data._original.platform} à ${data.platform}.`
      );
    }
  }
}

module.exports = { Subject, MoviePlatformObserver };
