import Action from '@src/action';

export default class GotoHome extends Action {
  async doAction() {
    location.href = `${process.env.REACT_APP_PUBLIC_URL}`;
  }
}
