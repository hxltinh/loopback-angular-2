export default class BaseAjaxRequest {

  protected domainUrl = process.env.DOMAIN;
  protected apiUrl = "";

  getUrl() {
    return `${location.protocol}//${this.domainUrl}/${this.apiUrl}`;
  }
}
