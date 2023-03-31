import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, CardActions } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import "../styles/register.scss";
import Navbar from "./Navbar";
import { Input } from "@mui/material";
import { ethers } from "ethers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import feature1 from "../assets/feature-1.png";
import bubble4 from "../assets/fixed4.png";
import { USERDETAILS_CONTRACT_ADDRESS_MUMBAI } from "../config";
import userdetails from "../artifacts/contracts/userDetails.sol/userDetails.json";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import EthersAdapter from "@safe-global/safe-ethers-lib";
import SafeServiceClient from "@safe-global/safe-service-client";
import Safe, {
  SafeFactory,
  SafeAccountConfig,
} from "@safe-global/safe-core-sdk";

function Register() {
  const { address, isConnected } = useAccount();
  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();
  const [safeAddress, setSafeAddress] = useState();
  const [ethAdapter, setAdapter] = useState();
  const [instance, setInstance] = useState();
  const [addOwner, setAddOwner] = useState();
  const [threshold, setThreshold] = useState();

  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    setProvider(provider);
    const signer = provider.getSigner();
    setSigner(signer);

    const addr = await signer.getAddress();
    setSafeAddress(addr);
    console.log(addr);

    const ethAdapter = new EthersAdapter({
      ethers,
      signerOrProvider: signer,
    });
    setAdapter(ethAdapter);
    console.log(ethAdapter);
  };

  const getData = async () => {
    console.log("in acc");

    const safeService = new SafeServiceClient({
      txServiceUrl: "https://safe-transaction-base-testnet.safe.global/",
      ethAdapter,
    });
    // txServiceUrl: "https://safe-transaction-goerli.safe.global/",

    console.log("safe service");
    console.log(safeService);

    const safes = await safeService.getSafesByOwner(address);
    console.log(safes);

    console.log(safes.safes[2]);

    const safeInfo = await safeService.getSafeInfo(safes.safes[2]);
    console.log("get safe info");
    console.log(safeInfo);

    // const safeFactory = await SafeFactory.create({ ethAdapter });
    // const owners = [
    //   "0xcc4091815292B2D3BB3076022Dc72d432B6cAdEb",
    //   "0xbFc4A28D8F1003Bec33f4Fdb7024ad6ad1605AA8",
    //   "0xcc920c851327AF767b4bf770e3b2C2ea50B90fde",
    // ];
    // const threshold = 3;

    // const safeFactory = await SafeFactory.create({ ethAdapter }); //4
    // const safeSdk = await safeFactory.deploySafe({
    //   safeAccountConfig: {
    //     threshold: 2,
    //     owners: [
    //       "0xcc4091815292B2D3BB3076022Dc72d432B6cAdEb",
    //       "0xbFc4A28D8F1003Bec33f4Fdb7024ad6ad1605AA8",
    //       "0xcc920c851327AF767b4bf770e3b2C2ea50B90fde",
    //     ],
    //   },
    // });
    // setSafeSdk(safeSdk);
    // console.log(safeSdk);
    // console.log("done");
    const safeAddress = "0xaF88be40b6ab8Ca721D1FE569F21B136C0139255";
    // const safeSdk = await Safe.create({ ethAdapter, "0x7fD8A1A0F6E73C85A7D2be47078c94721Df1502b" });
    const safeSdk = await Safe.create({ ethAdapter, safeAddress });
    console.log("instance");
    console.log(safeSdk);
    setInstance(safeSdk);

    // const safeSdk: Safe = await safeFactory.deploySafe({ safeAccountConfig: { threshold: 2, owners: ['0xcc4091815292B2D3BB3076022Dc72d432B6cAdEb', '0xbFc4A28D8F1003Bec33f4Fdb7024ad6ad1605AA8', '0xbFc4A28D8F1003Bec33f4Fdb7024ad6ad1605AA8'] }});
    // const safeAccountConfig = {
    //   owners,
    //   threshold,
    //   // ...
    // };
    // const safeSdk = await safeFactory.deploySafe({ safeAccountConfig });
    // const newSafeAddress = safeSdk.getAddress();
    // console.log(newSafeAddress);
  };

  const createAcc = async () => {
    const safeFactory = await SafeFactory.create({ ethAdapter });

    const safeSdk = await safeFactory.deploySafe({
      safeAccountConfig: {
        threshold: threshold,
        owners: [address, addOwner],
      },
    });

    console.log(safeSdk);
    console.log("done");

    const safeTransaction = await safeSdk.getAddress();
    console.log(safeTransaction);
  };

  const [userData, setUserData] = useState({
    userType: "",
    name: "",
    physcialAddress: "",
    profileImage: "",
  });
  const toastInfo = () =>
    toast.success("Register Successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const registerUser = async () => {
    const contractAddress = "0xE5584c2D4D845bD72a6C555d7e90fef4Ac0569f8";
    const contract = new ethers.Contract(contractAddress, userdetails, signer);
    const functionName = "addUser";
    const functionArgs = [
      userData.userType,
      encoder.encode(userData.name),
      encoder.encode(userData.physcialAddress),
      encoder.encode(userData.profileImage),
    ];

    const functionData = contract.interface.encodeFunctionData(functionName, [
      functionArgs,
    ]);

    console.log(functionData);

    const safeTransactionData = {
      to: "0xd15514e269554BABb74EDa41dC99381f8507FcfF",
      data: functionData,
      value: "0",
    };

    const safeTransaction = await instance.createTransaction({
      safeTransactionData,
    });
    console.log(safeTransaction);

    const sign = await instance.executeTransaction(safeTransaction);
    console.log(sign);
    console.log("5 now");

    const encoder = new TextEncoder();

    // start of "getting the data from user"/////////////////////////////////////////////////////////////////////////////
    const form = new FormData();
    form.append("file", userData.profileImage);

    const options = {
      method: "POST",
      url: "https://api.nftport.xyz/v0/files",
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=---011000010111000001101001",
        Authorization: "3a00a5ae-f74a-4369-820d-8da1cc435690",
      },
      data: form,
    };
    console.log(options);
    var imageUri;
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.ipfs_url);

        imageUri = response.data.ipfs_url;
      })
      .catch(function (error) {
        console.error(error);
      });

    userData.profileImage = imageUri;

    //End of "getting the data from user"/////////////////////////////////////////////////////////////////////////////

    //Start of "contract Interaction for storing userdata"/////////////////////////////////////////////////////////////////////////////

    // try {
    //   const provider = new ethers.providers.Web3Provider(window.ethereum);
    //   const signer = provider.getSigner();

    //   const registerUser = new ethers.Contract(
    //     USERDETAILS_CONTRACT_ADDRESS_MUMBAI,
    //     userdetails.abi,
    //     signer
    //   );

    //   const tx = await registerUser.addUser(
    //     userData.userType,
    //     encoder.encode(userData.name),
    //     encoder.encode(userData.physcialAddress),
    //     encoder.encode(userData.profileImage)
    //   );
    //   await tx.wait();
    //   toastInfo();
    //   setTimeout(() => {
    //     navigate("/");
    //   }, [5000]);
    // } catch (err) {
    //   console.log(err);
    // }

    //End of "contract Interaction for storing userdata"/////////////////////////////////////////////////////////////////////////////
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setUserData({
      ...userData,
      profileImage: selectedFile,
    });
  };
  useEffect(() => {
    if (!isConnected) {
      navigate("/");
    }
  }, [address]);

  useEffect(() => {
    connect();
  }, []);

  return (
    <>
      <div className="register-main-div">
        <div className="register-main">
          <h1 className="register-title">Register Here</h1>
          <FormControl
            sx={{ m: 1, minWidth: 70 }}
            size="small"
            id="dropdown-formcontrol"
            className="select-parent"
          >
            <InputLabel id="select-label-status">Select role</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              // value={age}
              label="Status"
              // onChange={handleChange}
              onChange={(e) => {
                setUserData({ ...userData, userType: e.target.value });
              }}
            >
              <MenuItem value={0}>Supplier </MenuItem>
              <MenuItem value={1}>Manufacturer </MenuItem>
              <MenuItem value={2}>Distributor</MenuItem>
            </Select>
          </FormControl>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            className="register-file"
          >
            <lable
              style={{ color: " rgba(255, 255, 255, 0.5)" }}
              className="profile-lbl"
            >
              Set Profile Image
            </lable>
            <TextField
              type="file"
              label=""
              onChange={handleFileChange}
              inputProps={{ accept: "image/*" }}
              className="input-edit-profile"
              id="register-file"
            />

            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="upload-image"
                style={{ width: "100px", height: "200px", marginTop: "1rem" }}
              />
            )}

            {/* <Input
              type="file"
              onChange={(e) => {
                setUserData({
                  ...userData,
                  profileImage: e.target.files[0],
                });
              }}
            /> */}
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
              }}
            />
            <TextField
              id="standard-basic"
              label="Owner Address"
              variant="standard"
              onChange={(e) => {
                setAddOwner(e.target.value);
              }}
            />
            <TextField
              id="standard-basic"
              label="enter threshold"
              variant="standard"
              onChange={(e) => {
                setThreshold(e.target.value);
              }}
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Address"
              variant="standard"
              onChange={(e) => {
                setUserData({ ...userData, physcialAddress: e.target.value });
              }}
            />
          </Box>

          <button
            className="register-btn"
            onClick={() => {
              registerUser();
            }}
          >
            Register
          </button>
          <button
            className="register-btn"
            onClick={() => {
              createAcc();
            }}
          >
            Create safe Account
          </button>
          <button
            className="register-btn"
            onClick={() => {
              getData();
            }}
          >
            get
          </button>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
        <span className="shape1 header-shape">
          <img src={feature1} className="register-bgimg"></img>
        </span>

        <span className="bubble3 header-shape">
          <img src={bubble4}></img>
        </span>
        <span className="bubble4 header-shape">
          <img src={bubble4}></img>
        </span>
      </div>
    </>
  );
}

export default Register;
