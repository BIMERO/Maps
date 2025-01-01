import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/quote.module.scss";
import { FiEdit } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import {
  Alert,
  Box,
  Checkbox,
  CircularProgress,
  createTheme,
  Modal,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
} from "@mui/material";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../Satoshi-Variable.ttf" });

const Review = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleOpenModal = () => setOpenModal(true);

  const handleCancelModal = () => setOpenModal(false);

  const handleOpenLoading = () => setOpenLoading(true);

  const handleCloseLoading = () => setOpenLoading(false);

  const handleCloseModal = () => {
    setOpenModal(false);
    handleOpenLoading();
  };

  const data = [
    {
      id: 1,
      items: "Oxygen Concentrator",
      itemId: "#28373",
      variant: "Blue",
      quantity: "100 pieces",
      price: "$200.00",
      deliverydate: "2023-12-02",
      amount: "2,000",
    },
    {
      id: 2,
      items: "Mechanical Ventilator",
      itemId: "#28373",
      variant: "NIL",
      quantity: "45 Kg",
      price: "$350.00",
      deliverydate: "2023-12-02",
      amount: "2,500",
    },
    {
      id: 3,
      items: "Patient Monitor",
      itemId: "#28373",
      variant: "Blue",
      quantity: "30 Units",
      price: "$300.00",
      deliverydate: "2023-12-02",
      amount: "1,500",
    },
    {
      id: 4,
      items: "Mechanical Ventilator",
      itemId: "#28373",
      variant: "Blue",
      quantity: "35 Units",
      price: "$200.00",
      deliverydate: "2023-12-02",
      amount: "1,500",
    },
  ];

  const tableTheme = createTheme({
    components: {
      MuiTable: {
        styleOverrides: {
          root: {
            fontFamily: `${myFont.style.fontFamily}, Arial, sans-serif`,
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontFamily: `${myFont.style.fontFamily}, Arial, sans-serif`,
          },
        },
      },
    },
    typography: {
      fontFamily: `${myFont.style.fontFamily}, Arial, sans-serif`,
    },
  });

  const style = {
    position: "absolute",
    top: "15%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "570px",
    bgcolor: "background.paper",
    borderRadius: "0.5rem",
    p: "2rem 1.5rem",
  };

  const loadingstyle = {
    position: "absolute",
    top: "15%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "350px",
    bgcolor: "background.paper",
    borderRadius: "1rem",
    p: "3.375rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center",
  };
  useEffect(() => {
    if (openLoading) {
      const timer = setTimeout(() => {
        setOpenLoading(false);
        setOpenAlert(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [openLoading]);

  return (
    <>
      <section className={styles.review}>
        <div className={styles.review_container}>
          <div className={styles.review_title}>
            <h2>Request Information</h2> <FiEdit className={styles.editIcon} />
          </div>

          <ul className={styles.review_list}>
            <li className={styles.review_item}>
              <p>Title</p> <span>Request for Equipments</span>
            </li>
            <li>
              <p>RFQ No</p> <span>#RQ 01234</span>
            </li>
            <li>
              <p>Requestor</p>{" "}
              <span className={styles.requestor}>
                <Image
                  src={"/images/initial.png"}
                  alt="initial"
                  width={32}
                  height={32}
                />{" "}
                <p>Jane Doe</p> <BsDot style={{ color: "#98A2B3" }} />
                <p style={{ color: "#98A2B3" }}>Head Nurse, Paediatrics</p>
              </span>
            </li>
            <li>
              <p>Department</p> <span>Maternity</span>
            </li>
            <li>
              <p>Expected delivery date</p> <span>2024-12-02</span>
            </li>
          </ul>
        </div>

        <div className={styles.review_container}>
          <div className={styles.request_table}>
            <p className={styles.table_title}>Item(s)</p>

            <ThemeProvider theme={tableTheme}>
              <Box
                sx={{
                  border: "1px solid #E4E7EC",
                  borderRadius: "0.625rem",
                  overflow: "hidden",
                }}
              >
                <TableContainer>
                  <Table>
                    {/* Table Header */}
                    <TableHead>
                      <TableRow
                        style={{ backgroundColor: "#F9FAFB", color: "#667185" }}
                      >
                        <TableCell
                          style={{ width: "30%" }}
                          sx={{ color: "#667185", padding: "0.25rem 0.5rem" }}
                        >
                          <Checkbox
                            sx={{ color: "#D0D5DD", fontSize: "1.25rem" }}
                          />
                          Items
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{ width: "10%" }}
                          sx={{ color: "#667185", padding: "0.25rem 0.5rem" }}
                        >
                          Variant
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{ width: "15%" }}
                          sx={{ color: "#667185", padding: "0.25rem 0.5rem" }}
                        >
                          Quantity
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{ width: "13%" }}
                          sx={{ color: "#667185", padding: "0.25rem 0.5rem" }}
                        >
                          Price
                        </TableCell>

                        <TableCell
                          align="left"
                          style={{ width: "15%" }}
                          sx={{ color: "#667185", padding: "0.25rem 0.5rem" }}
                        >
                          Amount
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{ width: "30%" }}
                          sx={{ color: "#667185", padding: "0.25rem 0.5rem" }}
                        >
                          Expected Delivery Date
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    {/* Table Body */}
                    <TableBody>
                      {data.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell
                            className={styles.item}
                            sx={{ padding: "0.375rem 0.75rem" }}
                          >
                            <Checkbox
                              sx={{ color: "#D0D5DD", fontSize: "1.25rem" }}
                            />
                            <Image
                              src="/images/media.png"
                              alt="dropdown"
                              width={40}
                              height={40}
                            />
                            <p>
                              <span>{item.items} </span>
                              <span>{item.itemId}</span>
                            </p>
                          </TableCell>
                          <TableCell
                            align="left"
                            sx={{ padding: "0.375rem 0.75rem" }}
                          >
                            {item.variant}
                          </TableCell>
                          <TableCell
                            align="left"
                            sx={{ padding: "0.375rem 0.75rem" }}
                          >
                            {item.quantity}
                          </TableCell>
                          <TableCell
                            align="left"
                            sx={{ padding: "0.375rem 0.75rem" }}
                          >
                            {item.price}
                          </TableCell>
                          <TableCell
                            align="left"
                            sx={{ padding: "0.375rem 0.75rem" }}
                          >
                            ${item.amount}.00
                          </TableCell>
                          <TableCell
                            align="left"
                            sx={{ padding: "0.375rem 0.75rem" }}
                          >
                            {item.deliverydate}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </ThemeProvider>

            <div className={styles.subTotal}>
              <p>
                <span>Sub Total: </span> <span>$8,000.00</span>
              </p>
              <p>
                <span>Total: </span> <strong>$8,750.00</strong>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.review_container}>
          <div className={styles.review_terms}>
            <div className={styles.review_file}>
              <Image
                src={"/icons/terms.svg"}
                alt="terms"
                width={32}
                height={32}
              />
              <div>
                <h3>Terms and Attachments</h3>
                <p>Review payment and delivery terms</p>
              </div>
            </div>
            <Image
              src={"/icons/dropdown.svg"}
              alt="terms"
              width={20}
              height={20}
            />
          </div>
        </div>

        <div className={styles.request_btns}>
          <button className={styles.cancel}>Cancel</button>
          <button className={styles.save}>Save as draft</button>
          <button className={styles.continue} onClick={handleOpenModal}>
            Submit
          </button>
        </div>
      </section>

      <ThemeProvider theme={tableTheme}>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ fontSize: "1.25rem", fontWeight: "700", color: "#101928" }}
            >
              Confirmation
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, mb: 2, color: "#475367", fontSize: "0.875rem" }}
            >
              You are about to submit this quote in response to RFQ ID, this
              will immediately be sent to the client “Westend Clear Hospital”.
              Are you sure you want to proceed?
            </Typography>
            <div className={styles.modal_btns}>
              <button
                className={styles.cancel}
                style={{
                  fontFamily: `${myFont.style.fontFamily}, Arial, sans-serif`,
                }}
                onClick={handleCancelModal}
              >
                Cancel
              </button>
              <button
                className={styles.continue}
                style={{
                  fontFamily: `${myFont.style.fontFamily}, Arial, sans-serif`,
                }}
                onClick={handleCloseModal}
              >
                Continue
              </button>
            </div>
          </Box>
        </Modal>
      </ThemeProvider>

      <ThemeProvider theme={tableTheme}>
        <Modal
          open={openLoading}
          onClose={handleCloseLoading}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={loadingstyle}>
            <CircularProgress />
            <Typography
              id="modal-modal-description"
              sx={{
                mt: 2,
                mb: 2,
                color: "#000",
                fontSize: "0.875rem",
                fontWeight: "500",
              }}
            >
              Sending Quote...
            </Typography>
          </Box>
        </Modal>
      </ThemeProvider>

      {openAlert && (
        <Stack
          sx={{
            width: "100%",
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1300,
            maxWidth: "390px",
          }}
          spacing={2}
        >
          <Box
            sx={{
              width: "100%",
              position: "fixed",
              top: 20,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1300,
            }}
          >
            <Alert
              severity="success"
              sx={{
                fontFamily: `${myFont.style.fontFamily}, Arial, sans-serif`,
                color: "#101928",
                fontSize: "0.875rem",
                fontWeight: "500",
              }}
              onClose={() => {
                setOpenAlert(false);
              }}
            >
              RFQ ID sent successfully!
            </Alert>
          </Box>
        </Stack>
      )}
    </>
  );
};

export default Review;
