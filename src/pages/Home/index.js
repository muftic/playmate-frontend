import "../../App.css";
import { Card, CardGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="backgroundImage"></div>
      <div className="cardPage" style={{ padding: "150px" }}>
        <h1
          style={{
            fontSize: 110,
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            verticalAlign: "center",
            textShadow: "0px 0px 5px white",
            color: "white",
          }}
        >
          Tinpet
        </h1>
        <h2
          style={{
            fontSize: 30,
            marginTop: -20,
            display: "flex",
            justifyContent: "center",
            color: "white",
          }}
        >
          Matching pets since 1992.
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            verticalAlign: "center",
          }}
        >
          <Link to="/signup">
            <Button variant="success">Sign up</Button>{" "}
          </Link>
        </div>
      </div>
      <div
        style={{
          padding: "40px",

          backgroundColor: "hsla(0, 0%, 0%, 0.3)",
        }}
      >
        <CardGroup>
          <Card style={{ borderStyle: "solid" }}>
            <Card.Img
              style={{
                borderStyle: "solid",

                width: "100%",
                borderRadius: "5px",
                height: "280px",
                objectFit: "cover",
              }}
              variant="top"
              src="https://trudog.com/wp-content/uploads/2016/01/shutterstock_245908141-1.jpg"
            />
            <Card.Body style={{ borderStyle: "solid", borderRadius: "5px" }}>
              <Card.Title style={{ color: "green" }}>Toby & Katty</Card.Title>
              <Card.Text>
                " We met through the app. Since the first date we knew we were
                meant for each other. Now we have 8 beautiful children and we
                are all happy dogs. Thank you Tinpet. You've changed our
                lifes!!!"
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{ borderStyle: "solid" }}>
              <small className="text-muted">5 years together.</small>
            </Card.Footer>
          </Card>
          <Card style={{ borderStyle: "solid" }}>
            <Card.Img
              style={{
                borderStyle: "solid",
                width: "100%",
                height: "280px",
                borderRadius: "5px",
                objectFit: "cover",
              }}
              variant="top"
              src="https://i.pinimg.com/originals/a4/96/3a/a4963a5bbdf113f099524638b8b933cf.jpg"
            />
            <Card.Body style={{ borderStyle: "solid" }}>
              <Card.Title style={{ color: "green" }}>
                Bonnie and Clyde
              </Card.Title>
              <Card.Text>
                "We were looking for something casual but we ended up falling in
                love with each other. Now we explore together the suburbs of the
                city!"{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{ borderStyle: "solid" }}>
              <small className="text-muted">1.5 years together.</small>
            </Card.Footer>
          </Card>
          <Card style={{ borderStyle: "solid" }}>
            <Card.Img
              style={{
                borderStyle: "solid",
                borderRadius: "5px",
                width: "100%",
                height: "280px",
                objectFit: "cover",
              }}
              variant="top"
              src="https://images.photowall.com/products/57204/dogs-kissing.jpg?h=699&q=85"
            />
            <Card.Body style={{ borderStyle: "solid" }}>
              <Card.Title style={{ color: "green" }}>Puff & Plaff</Card.Title>
              <Card.Text>
                "It was a love from the first sight. Exploring nature together
                is the best thing! Thank you Tinpet!"
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{ borderStyle: "solid" }}>
              <small className="text-muted">1 month together.</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}
