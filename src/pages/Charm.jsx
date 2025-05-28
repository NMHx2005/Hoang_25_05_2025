import './Charm.scss';

const Charm = () => {
  // Sample data for small charms
  const smallCharms = [
    { name: 'Bow Charm', image: '/images/charm__bow.png' },
    { name: 'Puffy Heart Charm', image: '/images/charm__heart.png' },
    { name: 'Puffy Paw Print Charm', image: '/images/charm__paw.png' },
    { name: 'Evil Eye Charm', image: '/images/charm__eye.png' },
  ];

  return (
    <div className="charm">
      {/* Banner Section */}
      <div className="charm__banner">
        <img src="/images/bg_charm.png" alt="Charm Banner" />
        <div className="charm__banner-overlay">
          <h1>CHAMR</h1>
          <p>
            "The most charming thing about life is that it's<br />
            not the big events that shape our stories —<br />
            it's the little moments. Celebrate those. One<br />
            charm at a time."
          </p>
        </div>
      </div>

      {/* Charm Selection Section */}
      <section className="charm__selection">
        <div className="container charm__selection-container">
          <div className="charm__large-image">
            <img src="/images/charm__large.png" alt="Choose Your Charms" />
            <div className="charm__large-image-text">ChooseYour Charms</div>
          </div>
          <div className="charm__small-charms">
            <div className="charm__small-charms-grid">
              {smallCharms.map((charm, index) => (
                <div className="charm__small-charm-item" key={index}>
                  <img src={charm.image} alt={charm.name} />
                  <p>{charm.name}</p>
                </div>
              ))}
            </div>
            <button className="charm__shop-all-button">SHOP ALL CHARMS</button>
          </div>
        </div>
      </section>

      <div style={{padding: '0 40px'}}>
        {/* Add Some Charm Section */}
        <section className="charm__add-charm">
          <div className="charm__add-charm-content">
            <h2>Add Some Charm</h2>
            <p>to customize your Glow™</p>
            <button className="charm__add-charm-button">CUSTOMIZE</button>
          </div>
        </section>

        {/* Build Your Charm Story Section */}
        <section className="charm__build-story">
          <div className="charm__build-story-content">
            <h2>Build Your Charm Story</h2>
            <button className="charm__build-story-button">BUILD YOURS HERE</button>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Charm;