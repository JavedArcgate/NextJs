<div className="text-center position-relative d-flex flex-column align-items-center justify-content-center">
              <div
                className="position-absolute w-100 d-flex justify-content-between "
                style={{ top: 0 }}
              >
                <img
                  className="rounded-circle ms-5"
                  style={{ width: 150, height: 150, objectFit: "cover" }}
                  src={prev.dish_pic}
                  alt={prev.title}
                  title={prev.title}
                />
                <div
                  className="d-flex align-items-center"
                  style={{ width: 480 }}
                >
                  <img
                    className="rounded-circle"
                    style={{ width: 130, height: 130, objectFit: "cover" }}
                    src={next.user_pic}
                    alt={next.title}
                    title={next.title}
                  />
                  <div
                    className="shadow-sm bg-body mx-3 p-3 border border-light text-start"
                    style={{ borderRadius: "1rem" }}
                  >
                    <h4 className="fw-bold mb-1">{next.name}</h4>
                    <h6 className="mb-1 text-muted">{next.category}</h6>
                    <p className="mb-0">{next.comment}</p>
                  </div>
                </div>
              </div>
              <img
                className="rounded-circle "
                style={{ width: 350, height: 350, objectFit: "cover" }}
                src={data.dish_pic}
                alt={data.title}
                title={data.title}
              />
              <div
                className="position-absolute w-100 d-flex justify-content-between"
                style={{ bottom: 0 }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{ width: 480 }}
                >
                  <div
                    className="shadow-sm bg-body mx-3 p-3 border border-light text-start"
                    style={{ borderRadius: "1rem" }}
                  >
                    <h4 className="fw-bold mb-1">{prev.name}</h4>
                    <h6 className="mb-1 text-muted">{prev.category}</h6>
                    <p className="mb-0">{prev.comment}</p>
                  </div>
                  <img
                    className="rounded-circle"
                    style={{ width: 130, height: 130, objectFit: "cover" }}
                    src={prev.user_pic}
                    alt={prev.title}
                    title={prev.title}
                  />
                </div>
                <img
                  className="rounded-circle me-5"
                  style={{ width: 150, height: 150, objectFit: "cover" }}
                  src={next.dish_pic}
                  alt={next.title}
                  title={next.title}
                />
              </div>
            </div>