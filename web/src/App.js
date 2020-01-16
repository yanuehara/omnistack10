import React from 'react';

import './global.css';
import './App.css';

import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/9919?s=200&v=4" alt="Name"/>
              <div className="user-info">
                <strong>name</strong>
                <span>techs</span>
                <p>Bio.</p>
                <a href="github.com/yanuehara">Acessar perfil no github</a>
              </div>
            </header>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/9919?s=200&v=4" alt="Yan Uehara"/>
              <div className="user-info">
                <strong>name</strong>
                <span>techs</span>
                <p>Bio.</p>
                <a href="github.com/yanuehara">Acessar perfil no github</a>
              </div>
            </header>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/9919?s=200&v=4" alt="Yan Uehara"/>
              <div className="user-info">
                <strong>name</strong>
                <span>techs</span>
                <p>Bio.</p>
                <a href="github.com/yanuehara">Acessar perfil no github</a>
              </div>
            </header>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/9919?s=200&v=4" alt="Yan Uehara"/>
              <div className="user-info">
                <strong>name</strong>
                <span>techs</span>
                <p>Bio.</p>
                <a href="github.com/yanuehara">Acessar perfil no github</a>
              </div>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
