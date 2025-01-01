"use client";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import styles from "./page.module.scss";
import ResponseQuote from "@/containers/procurementPage/ResponseQuote";
import { useState } from "react";
import { BsDot } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import {
  Box,
  Checkbox,
  createTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
} from "@mui/material";
import localFont from "next/font/local";

const myFont = localFont({ src: "../Satoshi-Variable.ttf" });

export default function Home() {
  const [page, setPage] = useState(0);

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

  return (
    <>
      {page === 0 && (
        <div className={styles.page}>
          <header>
            <div>
              <h1>Quote details</h1>
              <p>Created on Wed, 12th June 2022, 08:00am</p>
            </div>
            <div className={styles.page_btns}>
              <button className={styles.respond} onClick={() => setPage(1)}>
                Respond
              </button>
              <button className={styles.reject}>
                <IoClose />
                Reject
              </button>
            </div>
          </header>

          <div className={styles.quote_details}>
            <div className={styles.review_title}>
              <h2>Request Information</h2>{" "}
              <p>Expected delivery date : 2024-12-02</p>
            </div>

            <div className={styles.quote_container}>
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
                  <p>Status</p>{" "}
                  <span className={styles.status}>
                    <span>Awaiting</span>
                  </span>
                </li>
                <li>
                  <p>Department</p> <span>Maternity</span>
                </li>
              </ul>

              <aside>
                <p className={styles.client}>
                  <HiOutlineBuildingOffice2 style={{ fontSize: "1.125rem" }} />{" "}
                  Client
                </p>
                <div className={styles.address}>
                  <Image
                    src={"/images/winitial.png"}
                    alt="media"
                    width={32}
                    height={32}
                  />
                  <div>
                    <p>Westend Hospital </p>
                    <span>Clear Street</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          <div className={styles.quote_details}>
            <div className={styles.quote_table}>
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
                          style={{
                            backgroundColor: "#F9FAFB",
                            color: "#667185",
                          }}
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

          <div className={styles.quote_details}>
            <div className={styles.quote_terms}>
              <div className={styles.quote_file}>
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
        </div>
      )}

      {page === 1 && <ResponseQuote />}
    </>
  );
}
