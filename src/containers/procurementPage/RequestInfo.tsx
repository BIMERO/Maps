import React from "react";
import Image from "next/image";
import styles from "../../styles/quote.module.scss";
import { CgClose } from "react-icons/cg";
import { HiOutlineCalendar } from "react-icons/hi";
import {
  createTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  ThemeProvider,
} from "@mui/material";
import { FiTrash2 } from "react-icons/fi";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../Satoshi-Variable.ttf" });
const RequestInfo = ({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const data = [
    {
      id: 1,
      items: "Oxygen Concentrator",
      variant: "Blue",
      quantity: 100,
      price: 12.0,
      deliverydate: "2023-12-02",
      amount: 1200,
    },
    {
      id: 2,
      items: "Mechanical Ventilator",
      variant: "Blue",
      quantity: 100,
      price: 12.0,
      deliverydate: "2023-12-02",
      amount: 1200,
    },
    {
      id: 3,
      items: "Patient Monitor",
      variant: "Blue",
      quantity: 100,
      price: 12.0,
      deliverydate: "2023-12-02",
      amount: 1200,
    },
    {
      id: 4,
      items: "Mechanical Ventilator",
      variant: "Blue",
      quantity: 100,
      price: 12.0,
      deliverydate: "2023-12-02",
      amount: 1200,
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
  });

  return (
    <div className={styles.request_info}>
      <div className={styles.request_title}>
        <h2>Request for Quote</h2>
        <p>Fill out these details to send the RFQ</p>
      </div>

      <div className={styles.request_inputs}>
        <div className={styles.inputs}>
          <label htmlFor="">RFQ No</label>
          <input type="text" name="rfq" id="rfq" value={"RFQ-10234"} disabled />
        </div>
        <div className={styles.inputs}>
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="rfq"
            id="rfq"
            value={"Request for Equipments"}
            disabled
          />
        </div>
      </div>

      <div className={styles.request_inputs}>
        <div className={styles.inputsIcon}>
          <label htmlFor="">Department</label>
          <div>
            <input type="text" value={"Maturity"} disabled />
            <CgClose />
          </div>
        </div>
        <div className={styles.inputsIcon}>
          <label htmlFor="">Expected delivery date</label>
          <div>
            <HiOutlineCalendar />
            <input type="text" value={"2024-12-02"} disabled />
          </div>
          <small>Calculated based on lead time and issue date</small>
        </div>{" "}
      </div>

      <div className={styles.request_table}>
        <p className={styles.table_title}>Add Items</p>
        <ThemeProvider theme={tableTheme}>
          <TableContainer sx={{ marginBottom: "1rem" }}>
            <Table>
              {/* Table Header */}
              <TableHead>
                <TableRow
                  style={{ backgroundColor: "#F7F9FC", color: "#667185" }}
                >
                  <TableCell
                    sx={{
                      color: "#667185",
                      border: "none",
                      padding: "0.25rem 0.5rem",
                    }}
                  >
                    Items
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#667185",
                      border: "none",
                      padding: "0.25rem 0.5rem",
                    }}
                  >
                    Variant
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#667185",
                      border: "none",
                      padding: "0.25rem 0.5rem",
                    }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#667185",
                      border: "none",
                      padding: "0.25rem 0.5rem",
                    }}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ width: "15%" }}
                    sx={{
                      color: "#667185",
                      border: "none",
                      padding: "0.25rem 0.5rem",
                    }}
                  >
                    Expected delivery d...
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#667185",
                      border: "none",
                      padding: "0.25rem 0.5rem",
                    }}
                  >
                    Amount
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#667185",
                      border: "none",
                      padding: "0.25rem 0.5rem",
                    }}
                  ></TableCell>
                </TableRow>
              </TableHead>

              {/* Table Body */}
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell sx={{ border: "none", padding: "0.5rem" }}>
                      <span className={styles.item}>
                        {item.items}{" "}
                        <Image
                          src="/icons/dropdown.svg"
                          alt="dropdown"
                          width={20}
                          height={20}
                        />
                      </span>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        border: "none",
                        padding: "0.5rem",
                      }}
                    >
                      <span>
                        {item.variant}{" "}
                        <Image
                          src="/icons/dropdown.svg"
                          alt="dropdown"
                          width={20}
                          height={20}
                        />
                      </span>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ border: "none", padding: "0.5rem" }}
                    >
                      <span className={styles.quantity}>
                        {item.quantity} <p>Pack</p>
                      </span>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ border: "none", padding: "0.5rem" }}
                    >
                      <span className={styles.price}>
                        <b>$</b>
                        {item.price}.00
                      </span>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ border: "none", padding: "0.5rem" }}
                    >
                      <span className={styles.date}>
                        <HiOutlineCalendar /> {item.deliverydate}
                      </span>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ border: "none", padding: "0.5rem" }}
                    >
                      <p className={styles.amount}>${item.amount}.00</p>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ border: "none", padding: "0.5rem" }}
                    >
                      <FiTrash2
                        style={{ color: "#98A2B3", fontSize: "18px" }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

              {/* Table Footer */}
              <TableFooter sx={{ borderTop: "1px solid #E7E9EE" }}>
                <TableRow>
                  <TableCell
                    colSpan={5}
                    align="right"
                    sx={{ border: "none", color: "#475367", fontSize: "1rem" }}
                  >
                    Sub Total:
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ border: "none", color: "#475367", fontSize: "1rem" }}
                  >
                    $1200.00
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </ThemeProvider>

        <div className={styles.request_inputs}>
          <div className={styles.inputs}>
            <label htmlFor="">Note</label>
            <textarea
              name="note"
              id="note"
              placeholder="Enter note here"
              cols={5}
              rows={5}
            ></textarea>
            <small>0/200</small>
          </div>
        </div>
      </div>

      <div className={styles.request_btns}>
        <button className={styles.cancel}>Cancel</button>
        <button className={styles.save}>Save as draft</button>
        <button className={styles.continue} onClick={() => setStep(step + 1)}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default RequestInfo;
