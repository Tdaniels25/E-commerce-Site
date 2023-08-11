import { useCallback } from "react";
import styles from "./Dashboard.module.css";
const Dashboard = () => {
  const onProductImageContainer1Click = useCallback(() => {
    // Please sync "Item-View" to the project
  }, []);

  const onButtonContainer8Click = useCallback(() => {
    // Please sync "Bag" to the project
  }, []);

  const onNavLinkContainer1Click = useCallback(() => {
    // Please sync "Bag" to the project
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.contentFrame}>
        <div className={styles.topBar}>
          <div className={styles.input}>
            <div className={styles.label}>
              <div className={styles.label1}>Search Item</div>
            </div>
            <div className={styles.inputField}>
              <div className={styles.inputArea}>
                <div className={styles.placeholder}>
                  Apple Watch, Samsung S21, Macbook Pro, ...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentArea}>
          <div className={styles.row01}>
            <div className={styles.itemCard}>
              <div
                className={styles.productImage}
                onClick={onProductImageContainer1Click}
              >
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Apple Watch</div>
                <div className={styles.smallDescription}>Series 5 SE</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 529.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemCard1}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Sony ZX330BT</div>
                <div className={styles.smallDescription}>Light Grey</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 39.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src="/icon1.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemCard1}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image2@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Iphone 11</div>
                <div className={styles.smallDescription}>Serious Black</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 619.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src="/icon2.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemCard1}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image3@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Iphone 11</div>
                <div className={styles.smallDescription}>Subway Blue</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 619.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src="/icon3.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row02}>
            <div className={styles.itemCard1}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image4@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Iphone 11</div>
                <div className={styles.smallDescription}>Product RED</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 619.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemCard1}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image5@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Iphone 11</div>
                <div className={styles.smallDescription}>Milky White</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 619.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src="/icon1.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemCard1}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image6@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Iphone 13</div>
                <div className={styles.smallDescription}>Product RED</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 619.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src="/icon2.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemCard1}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image7@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Iphone 14</div>
                <div className={styles.smallDescription}>Product RED</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 619.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src="/icon3.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dashboardChild} />
      <div className={styles.bagArea}>
        <div className={styles.title}>
          <div className={styles.itemName}>Bag</div>
        </div>
        <div className={styles.bagItems}>
          <div className={styles.row}>
            <div className={styles.bagItem}>
              <div className={styles.productImage16}>
                <img
                  className={styles.imageIcon8}
                  alt=""
                  src="/image8@2x.png"
                />
              </div>
            </div>
            <div className={styles.bagItem}>
              <div className={styles.productImage16}>
                <img className={styles.imageIcon} alt="" src="/image9@2x.png" />
              </div>
            </div>
            <div className={styles.bagItem}>
              <div className={styles.productImage16}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image10@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.row1}>
            <div className={styles.bagItem}>
              <div className={styles.productImage16}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image11@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cta}>
          <div className={styles.button8} onClick={onButtonContainer8Click}>
            <img className={styles.icon8} alt="" src="/icon4.svg" />
            <div className={styles.itemName}>View Bag</div>
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.navLinkstop}>
          <div className={styles.logo}>
            <img className={styles.logoChild} alt="" src="/group-1.svg" />
          </div>
          <div className={styles.title}>
            <img className={styles.icon9} alt="" src="/icon5.svg" />
          </div>
          <div className={styles.navLink}>
            <img className={styles.icon8} alt="" src="/icon6.svg" />
          </div>
          <div className={styles.navLink1} onClick={onNavLinkContainer1Click}>
            <img className={styles.icon8} alt="" src="/icon7.svg" />
          </div>
        </div>
        <div className={styles.title}>
          <div className={styles.navLink2}>
            <img className={styles.icon8} alt="" src="/icon8.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
