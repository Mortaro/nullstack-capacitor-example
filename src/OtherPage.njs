import Nullstack from 'nullstack';

class OtherPage extends Nullstack {

  static async logOnServer() {
    const number = Math.floor(Math.random() * 6) + 1;
    console.log({ number })
    return number;
  }

  async logOnClient() {
    const number = await this.logOnServer()
    console.log({ number })
  }
  
  render() {
    return (
      <div> 
        <h1> Other age </h1>
        <button onclick={this.logOnClient}> Log </button>
      </div>
    )
  }

}

export default OtherPage;