class localStorageApi {
  getBackground() {
    const item = localStorage.getItem('bgc');

    if (item) return item;

    return 'empty';
  }

  setBackground(color) {
    if (this.getBackground() === 'empty') {
      localStorage.setItem('bgc', color);
    } else {
      localStorage.removeItem('bgc');
      localStorage.setItem('bgc', color);
    }

    return color;
  }
}

export default new localStorageApi();
