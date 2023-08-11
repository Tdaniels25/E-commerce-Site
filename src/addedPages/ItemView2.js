import { useCallback } from "react";
import styles from "./ItemView.module.css";
const ItemView = () => {
  const onButtonContainer1Click = useCallback(() => {
    // Please sync "Bag" to the project
  }, []);

  const onLogoContainerClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onNavLinkContainer1Click = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onNavLinkContainer2Click = useCallback(() => {
    // Please sync "Bag" to the project
  }, []);

  return (
    <div className={styles.itemView}>
      <div className={styles.contentFrame}>
        <div className={styles.contentArea}>
          <div className={styles.navLink}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.link}>Back</div>
          </div>
          <div className={styles.topArea}>
            <div className={styles.imageArea}>
              <div className={styles.imageGallery}>
                <div className={styles.image01}>
                  <div className={styles.productImage}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.image01}>
                  <div className={styles.productImage}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.image01}>
                  <div className={styles.productImage}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.mainImage}>
                <div className={styles.productImage3}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.textContent}>
              <div className={styles.header}>
                <b className={styles.link}>Apple Watch</b>
                <div className={styles.series5Se}>Series 5 SE</div>
              </div>
              <div className={styles.special}>
                <div className={styles.rating}>
                  <img className={styles.icon} alt="" src="/star01.svg" />
                  <img className={styles.icon} alt="" src="/star01.svg" />
                  <img className={styles.icon} alt="" src="/star01.svg" />
                  <img className={styles.icon} alt="" src="/star01.svg" />
                  <img className={styles.icon} alt="" src="/star05.svg" />
                </div>
                <div className={styles.div}>4.5 / 5</div>
              </div>
              <div className={styles.div1}>$ 529.99</div>
              <div className={styles.shortDescription}>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  pellentesque tellus imperdiet mattis. Proin in quis ipsum non
                  amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc
                  volutpat, tincidunt lorem mi duis. Vitae elementum libero.
                </div>
              </div>
              <div className={styles.cta}>
                <div className={styles.button}>
                  <img className={styles.icon} alt="" src="/icon1.svg" />
                  <div className={styles.bag}>Add to Bag</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottomArea}>
            <div className={styles.bottomAreaChild} />
            <div className={styles.description}>
              <div className={styles.bag}>Description</div>
              <div className={styles.loremIpsumDolorContainer}>
                <p className={styles.orciVelRidiculus}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dignissim odio faucibus nec malesuada purus volutpat vel sed
                  viverra. Id sagittis, phasellus dui in arcu. Nec arcu, sit
                  nunc, nibh purus pellentesque sagittis. Felis rhoncus
                  facilisis massa eget purus in purus. Etiam at cras nulla nunc.
                  Malesuada in pretium diam scelerisque sit mattis in egestas
                  neque. Eu porta tempor sodales nisl integer turpis porttitor
                  sed sed. Ut senectus odio dictum enim velit tempor diam
                  quisque suspendisse.
                </p>
                <p className={styles.orciVelRidiculus}>
                  Orci vel ridiculus diam viverra. Libero malesuada orci, quis
                  placerat suscipit augue imperdiet. Et praesent augue dictum
                  mauris eget lacus malesuada. Aenean nisi, sodales natoque
                  massa magna dignissim mi. Mattis tellus, justo, lorem sed
                  tempor diam sit viverra enim. Id id placerat eu etiam nulla
                  laoreet.
                </p>
                <p className={styles.orciVelRidiculus}>
                  Dignissim leo fames turpis quis suspendisse vulputate laoreet
                  vulputate ac. Aliquam justo lectus eu dui porttitor. Cras a
                  aliquam phasellus sollicitudin ornare. Tristique volutpat
                  facilisis in ut proin. Est vitae facilisi sollicitudin id
                  lorem mattis nibh ipsum, nec. Consectetur consectetur morbi
                  morbi aliquet mi risus, velit, sit at. Integer morbi viverra
                  hendrerit risus.
                </p>
                <p className={styles.orciVelRidiculus}>
                  Odio phasellus nibh senectus nec id enim quam sed. At potenti
                  sollicitudin sollicitudin lobortis morbi. Nunc molestie et
                  adipiscing aliquam. Sit vel mi dolor suscipit. In eget ut ac
                  at facilisi leo viverra. Arcu ac ut fermentum, viverra et,
                  vitae etiam cras. Eu purus non ut turpis fusce. Mi vitae nibh
                  mi ut feugiat varius risus eros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.itemViewChild} />
      <div className={styles.bagArea}>
        <div className={styles.title}>
          <div className={styles.bag}>Bag</div>
        </div>
        <div className={styles.bagItems}>
          <div className={styles.row}>
            <div className={styles.bagItem}>
              <div className={styles.productImage4}>
                <img
                  className={styles.imageIcon4}
                  alt=""
                  src="/image2@2x.png"
                />
              </div>
            </div>
            <div className={styles.bagItem}>
              <div className={styles.productImage4}>
                <img className={styles.imageIcon} alt="" src="/image3@2x.png" />
              </div>
            </div>
            <div className={styles.bagItem}>
              <div className={styles.productImage4}>
                <img className={styles.imageIcon} alt="" src="/image4@2x.png" />
              </div>
            </div>
          </div>
          <div className={styles.row1}>
            <div className={styles.bagItem}>
              <div className={styles.productImage4}>
                <img className={styles.imageIcon} alt="" src="/image5@2x.png" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cta1}>
          <div className={styles.button2} onClick={onButtonContainer1Click}>
            <img className={styles.icon} alt="" src="/icon2.svg" />
            <div className={styles.bag}>View Bag</div>
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.navLinkstop}>
          <div className={styles.logo} onClick={onLogoContainerClick}>
            <img className={styles.logoChild} alt="" src="/group-1.svg" />
          </div>
          <div className={styles.title}>
            <img className={styles.icon3} alt="" src="/icon3.svg" />
          </div>
          <div className={styles.navLink1} onClick={onNavLinkContainer1Click}>
            <img className={styles.icon} alt="" src="/icon4.svg" />
          </div>
          <div className={styles.navLink2} onClick={onNavLinkContainer2Click}>
            <img className={styles.icon} alt="" src="/icon5.svg" />
          </div>
        </div>
        <div className={styles.title}>
          <div className={styles.navLink3}>
            <img className={styles.icon} alt="" src="/icon6.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemView;
