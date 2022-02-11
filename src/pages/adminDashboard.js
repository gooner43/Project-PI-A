import React, { useState, useEffect } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import StakingABI from "../contracts/Staking.json";
import getWeb3 from "../utility/getWeb3";
import { useWeb3React } from "@web3-react/core";
import Loading from "../components/Loading";
import NotificationManager from "react-notifications/lib/NotificationManager";
import config from "../config.json";
import Box from "./Box";
import { Switch } from "@mui/material";

const { StakingAddress } = config;

let AdminDashboard = () => {
	const { account, activate } = useWeb3React();
	const [web3, setWeb3] = useState({});
	const [Staking, setStaking] = useState({});
	const [initData, setInitData] = useState({
		dogeAPY: "",
		dogeEli: "",
		dogePen: "",

		ethAPY: "",
		ethEli: "",
		ethPen: "",

		tetherUSDTAPY: "",
		tetherUSDTEli: "",
		tetherUSDTPen: "",

		trueUSDTUSDAPY: "",
		trueUSDTUSDEli: "",
		trueUSDTUSDPen: "",

		geminiDollarGUSDAPY: "",
		geminiDollarGUSDEli: "",
		geminiDollarGUSDPen: "",

		usdCoinUSDCAPY: "",
		usdCoinUSDCEli: "",
		usdCoinUSDCPen: "",

		paxDollarPAXAPY: "",
		paxDollarPAXEli: "",
		paxDollarPAXPen: "",
	});
	const [DogeAPY, setDogeAPY] = useState("");
	const [DogeEli, setDogeEli] = useState("");
	const [DogePen, setDogePenalty] = useState("");

	const [EthAPY, setEthAPY] = useState("");
	const [EthEli, setEthEli] = useState("");
	const [EthPen, setEthPen] = useState("");

	const [TetherUSDTAPY, setTetherUSDTAPY] = useState("");
	const [TetherUSDTEli, setTetherUSDTEli] = useState("");
	const [TetherUSDTPen, setTetherUSDTPen] = useState("");

	const [TrueUSDTUSDAPY, setTrueUSDTUSDAPY] = useState("");
	const [TrueUSDTUSDEli, setTrueUSDTUSDEli] = useState("");
	const [TrueUSDTUSDPen, setTrueUSDTUSDPen] = useState("");

	const [GeminiDollarGUSDAPY, setGeminiDollarGUSDAPY] = useState("");
	const [GeminiDollarGUSDEli, setGeminiDollarGUSDEli] = useState("");
	const [GeminiDollarGUSDPen, setGeminiDollarGUSDPen] = useState("");

	const [USDCoinUSDCAPY, setUSDCoinUSDCAPY] = useState("");
	const [USDCoinUSDCEli, setUSDCoinUSDCEli] = useState("");
	const [USDCoinUSDCPen, setUSDCoinUSDCPen] = useState("");

	const [PAXDollarPAXAPY, setPAXDollarPAXAPY] = useState("");
	const [PAXDollarPAXEli, setPAXDollarPAXEli] = useState("");
	const [PAXDollarPAXPen, setPAXDollarPAXPen] = useState("");

	const [activeItem, setActiveItem] = useState(-1);
	const [isLoading, setIsLoading] = useState(false);
	const [dogeClaimList, setDogeCliamList] = useState([]);
	const [cryptoClaimList, setCryptoCliamList] = useState([]);

	useEffect(() => {
		const connectWeb3 = async () => {
			const _web3 = await getWeb3();
			const _Staking = new _web3.eth.Contract(StakingABI, StakingAddress);
			setWeb3(_web3);
			setStaking(_Staking);
		};

		connectWeb3();
	}, []);

	useEffect(() => {
		const setData = async () => {
			if (account && Staking && activeItem == -1) {
				const _dogeAPY = await Staking.methods.DogeAPY().call();
				const _dogeEli = await Staking.methods.DogeElig().call();
				const _dogePen = await Staking.methods.DogePenalty().call();

				const _ethAPY = await Staking.methods.EthAPY().call();
				const _ethEli = await Staking.methods.EthElig().call();
				const _ethPen = await Staking.methods.EthPenalty().call();

				const _tetherUSDTAPY = await Staking.methods.tetherUSDTods
					.TetherUSDTAPY()
					.call();
				const _tetherUSDTEli = await Staking.methods.tetherUSDTods
					.TetherUSDTElig()
					.call();
				const _tetherUSDTPen = await Staking.methods.tetherUSDTods
					.TetherUSDTPenalty()
					.call();

				const _trueUSDTUSDAPY = await Staking.methods.trueUSDTUSDods
					.TrueUSDTUSDAPY()
					.call();
				const _trueUSDTUSDEli = await Staking.methods.trueUSDTUSDods
					.TrueUSDTUSDElig()
					.call();
				const _trueUSDTUSDPen = await Staking.methods.trueUSDTUSDods
					.TrueUSDTUSDPenalty()
					.call();

				const _geminiDollarGUSDAPY = await Staking.methods.geminiDollarGUSDods
					.GeminiDollarGUSDAPY()
					.call();
				const _geminiDollarGUSDEli = await Staking.methods.geminiDollarGUSDods
					.GeminiDollarGUSDElig()
					.call();
				const _geminiDollarGUSDPen = await Staking.methods.geminiDollarGUSDods
					.GeminiDollarGUSDPenalty()
					.call();

				const _usdCoinUSDCAPY = await Staking.methods.usdCoinUSDCods
					.USDCoinUSDCAPY()
					.call();
				const _usdCoinUSDCEli = await Staking.methods.usdCoinUSDCods
					.USDCoinUSDCElig()
					.call();
				const _usdCoinUSDCPen = await Staking.methods.usdCoinUSDCods
					.USDCoinUSDCPenalty()
					.call();

				const _paxDollarPAXAPY = await Staking.methods.paxDollarPAXods
					.PaxDollarPAXAPY()
					.call();
				const _paxDollarPAXEli = await Staking.methods.paxDollarPAXods
					.PaxDollarPAXElig()
					.call();
				const _paxDollarPAXPen = await Staking.methods.paxDollarPAXods
					.PaxDollarPAXPenalty()
					.call();

				setInitData({
					...initData,
					dogeAPY: _dogeAPY,
					dogeEli: _dogeEli,
					dogePen: _dogePen,

					ethAPY: _ethAPY,
					ethEli: _ethEli,
					ethPen: _ethPen,

					tetherUSDTAPY: _tetherUSDTAPY,
					tetherUSDTEli: _tetherUSDTEli,
					tetherUSDTPen: _tetherUSDTPen,

					trueUSDTUSDAPY: _trueUSDTUSDAPY,
					trueUSDTUSDEli: _trueUSDTUSDEli,
					trueUSDTUSDPen: _trueUSDTUSDPen,

					geminiDollarGUSDAPY: _geminiDollarGUSDAPY,
					geminiDollarGUSDEli: _geminiDollarGUSDEli,
					geminiDollarGUSDPen: _geminiDollarGUSDPen,

					usdCoinUSDCAPY: _usdCoinUSDCAPY,
					usdCoinUSDCEli: _usdCoinUSDCEli,
					usdCoinUSDCPen: _usdCoinUSDCPen,

					paxDollarPAXAPY: _paxDollarPAXAPY,
					paxDollarPAXEli: _paxDollarPAXEli,
					paxDollarPAXPen: _paxDollarPAXPen,
				});

				setDogeAPY(_dogeAPY);
				setDogeEli(_dogeEli);
				setDogePenalty(_dogePen);

				setEthAPY(_ethAPY);
				setEthEli(_ethEli);
				setEthPen(_ethPen);

				setTetherUSDTAPY(_tetherUSDTAPY);
				setTetherUSDTEli(_tetherUSDTEli);
				setTetherUSDTPen(_tetherUSDTPen);

				setTrueUSDTUSDAPY(_trueUSDTUSDAPY);
				setTrueUSDTUSDEli(_trueUSDTUSDEli);
				setTrueUSDTUSDPen(_trueUSDTUSDPen);

				setGeminiDollarGUSDAPY(_geminiDollarGUSDAPY);
				setGeminiDollarGUSDEli(_geminiDollarGUSDEli);
				setGeminiDollarGUSDPen(_geminiDollarGUSDPen);

				setUSDCoinUSDCAPY(_usdCoinUSDCAPY);
				setUSDCoinUSDCEli(_usdCoinUSDCEli);
				setUSDCoinUSDCPen(_usdCoinUSDCPen);

				setPAXDollarPAXAPY(_paxDollarPAXAPY);
				setPAXDollarPAXEli(_paxDollarPAXEli);
				setPAXDollarPAXPen(_paxDollarPAXPen);
			}
		};

		setData();
	}, [account, activeItem]);

	const importAirDropList = (e, type) => {
		if (!account) {
			NotificationManager.warning("Metamask is not connected!", "Warning");
			return;
		}
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();
			reader.onloadend = function (e) {
				const text = e.target.result;
				processCSV(text, type);
			};

			reader.readAsText(file);
		} else {
			switch (type) {
				case 0:
					setDogeCliamList([]);
					break;
				case 1:
					setCryptoCliamList([]);
					break;
				default:
					break;
			}
		}
	};

	const processCSV = (str, type) => {
		const rows = str.slice(str.indexOf("\n") + 1, str.length - 1).split("\n");
		const newArray = rows.map((row) => {
			row = row.slice(0, row.indexOf("\r"));
			const values = row.split(",");
			return {
				staker: values[0],
				balance: web3.utils.toWei(values[1], "ether"),
			};
		});

		switch (type) {
			case 0:
				setDogeCliamList(newArray);
				break;
			case 1:
				setCryptoCliamList(newArray);
				break;
			default:
				break;
		}
	};

	const changeItem = async () => {
		try {
			setIsLoading(true);
			switch (activeItem.toString()) {
				case "ethAPY":
					await Staking.methods.setEthAPY(EthAPY).send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "ethEli":
					await Staking.methods.setEthEli(EthEli).send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "ethPen":
					await Staking.methods.setEthPen(EthPen).send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "tetherUSDTAPY":
					await Staking.mtetherUSDTods
						.setTetherUSDTAPY(TetherUSDTAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "tetherUSDTEli":
					await Staking.methods.tetherUSDTods
						.setTetherUSDTEli(TetherUSDTEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "tetherUSDTPen":
					await Staking.methods.tetherUSDTods
						.setTetherUSDTPen(TetherUSDTPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "trueUSDTUSDAPY":
					await Staking.methods.trueUSDTUSDods
						.setTrueUSDTUSDAPY(TrueUSDTUSDAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "trueUSDTUSDEli":
					await Staking.methods.trueUSDTUSDods
						.setTrueUSDTUSDEli(TrueUSDTUSDEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "trueUSDTUSDPen":
					await Staking.methods.trueUSDTUSDods
						.setTrueUSDTUSDPen(TrueUSDTUSDPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "geminiDollarGUSDAPY":
					await Staking.methods.geminiDollarGUSDods
						.setGeminiDollarGUSDAPY(GeminiDollarGUSDAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "geminiDollarGUSDEli":
					await Staking.methods.geminiDollarGUSDods
						.setGeminiDollarGUSDEli(GeminiDollarGUSDEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "geminiDollarGUSDPen":
					await Staking.methods.geminiDollarGUSDods
						.setGeminiDollarGUSDPen(GeminiDollarGUSDPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "usdCoinUSDCAPY":
					await Staking.methods.usdCoinUSDCods
						.setUSDCoinUSDCAPY(USDCoinUSDCAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "usdCoinUSDCEli":
					await Staking.methods.usdCoinUSDCods
						.setUSDCoinUSDCEli(USDCoinUSDCEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "usdCoinUSDCPen":
					await Staking.methods.usdCoinUSDCods
						.setUSDCoinUSDCPen(USDCoinUSDCPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "paxDollarPAXAPY":
					await Staking.methods.paxDollarPAXods
						.setPAXDollarPAXAPY(PAXDollarPAXAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "paxDollarPAXEli":
					await Staking.methods.paxDollarPAXods
						.setPAXDollarPAXEli(PAXDollarPAXEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "paxDollarPAXPen":
					await Staking.methods.paxDollarPAXods
						.setPAXDollarPAXPen(PAXDollarPAXPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				default:
					break;
			}
			window.$("#amendPopup").modal("hide");
			setActiveItem(-1);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
			NotificationManager.error(";S", "Failed");
			setIsLoading(false);
		}
	};

	const optionalClaim = async (type) => {
		setIsLoading(true);
		let claimList = [];
		if (!type) claimList = dogeClaimList;
		else claimList = cryptoClaimList;

		try {
			await Staking.methods
				.optionalClaim(claimList, type)
				.send({ from: account });
			NotificationManager.success(":D", "Success");
		} catch (err) {
			NotificationManager.error(":(", "Failed");
		}
		setIsLoading(false);
	};

	return (
		<React.Fragment>
			{isLoading && <Loading />}
			<Navbar />
			<div className="coin-main py-60 ms">
				<div className="container-lg">
					<div className="row d-flex justify-content-center">
						<div className="admin-dashboard-bg">
							<div className="container">
								<div className="">
									<ul className="nav nav-pills nav-pills-custom justify-content-center">
										<li className="nav-item">
											<button
												className="nav-link"
												id="aurora-tab"
												data-bs-toggle="tab"
												data-bs-target="#aurora-page-content"
												type="button"
												role="tab"
												aria-controls="aurora-page-content"
												aria-selected="false"
											>
												Aurora
											</button>
										</li>
										<li className="nav-item">
											<button
												className="nav-link"
												id="binance-tab"
												data-bs-toggle="tab"
												data-bs-target="#binance-page-content"
												type="button"
												role="tab"
												aria-controls="binance-page-content"
												aria-selected="false"
											>
												Binance
											</button>
										</li>
										<li className="nav-item">
											<button
												className="nav-link active"
												id="etherium-tab"
												data-bs-toggle="tab"
												data-bs-target="#etherium-page-content"
												type="button"
												role="tab"
												aria-controls="etherium-page-content"
												aria-selected="true"
											>
												Etherium
											</button>
										</li>
										<li className="nav-item">
											<button
												className="nav-link"
												id="polygon-tab"
												data-bs-toggle="tab"
												data-bs-target="#polygon-page-content"
												type="button"
												role="tab"
												aria-controls="polygon-page-content"
												aria-selected="false"
											>
												Polygon
											</button>
										</li>
										<li className="nav-item">
											<button
												className="nav-link"
												id="avalanche-tab"
												data-bs-toggle="tab"
												data-bs-target="#avalanche-page-content"
												type="button"
												role="tab"
												aria-controls="avalanche-page-content"
												aria-selected="false"
											>
												Avalanche
											</button>
										</li>
									</ul>
								</div>
								<div className="tab-content">
									<div
										id="aurora-page-content"
										className="tab-pane fade"
										role="tabpanel"
										aria-labelledby="aurora-tab"
									></div>

									<div
										id="binance-page-content"
										role="tabpanel"
										aria-labelledby="binance-tab"
									></div>
									<div
										id="etherium-page-content"
										className="tab-pane fade show active"
										role="tabpanel"
										aria-labelledby="etherium-tab"
									>
										<div className="coin">
											<div className="px-3">
												<h5>
													PARA{" "}
													<span className="d-inline-block">
														<button
															className="accordion-button transparent-accordion-button p-0"
															type="button"
															data-bs-toggle="collapse"
															data-bs-target="#para-dai"
															aria-expanded="true"
															aria-controls="para-dai"
														></button>
													</span>
													<Switch defaultChecked />
												</h5>
											</div>
											<div
												id="para-dai"
												className="accordion-collapse collapse show"
											>
												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={EthAPY}
														setAPY={setEthAPY}
														eli={EthEli}
														setEli={setEthEli}
														pen={EthPen}
														setPen={setEthPen}
														initDataKeyAPY="ethAPY"
														initDataKeyEli="ethEli"
														initDataKeyPen="ethPen"
														title={"Etherium (ETH)"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={TetherUSDTAPY}
														setAPY={setTetherUSDTAPY}
														eli={TetherUSDTEli}
														setEli={setTetherUSDTEli}
														pen={TetherUSDTPen}
														setPen={setTetherUSDTPen}
														initDataKeyAPY="tetherUSDTAPY"
														initDataKeyEli="tetherUSDTEli"
														initDataKeyPen="tetherUSDTPen"
														title={"Tether (USDT)"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={TrueUSDTUSDAPY}
														setAPY={setTrueUSDTUSDAPY}
														eli={TrueUSDTUSDEli}
														setEli={setTrueUSDTUSDEli}
														pen={TrueUSDTUSDPen}
														setPen={setTrueUSDTUSDPen}
														initDataKeyAPY="trueUSDTUSDAPY"
														initDataKeyEli="trueUSDTUSDEli"
														initDataKeyPen="trueUSDTUSDPen"
														title={"TrueUSD (TUSD)"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={GeminiDollarGUSDAPY}
														setAPY={setGeminiDollarGUSDAPY}
														eli={GeminiDollarGUSDEli}
														setEli={setGeminiDollarGUSDEli}
														pen={GeminiDollarGUSDPen}
														setPen={setGeminiDollarGUSDPen}
														initDataKeyAPY="geminiDollarGUSDAPY"
														initDataKeyEli="geminiDollarGUSDEli"
														initDataKeyPen="geminiDollarGUSDPen"
														title={"Gemini Dollar (GUSD)"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={USDCoinUSDCAPY}
														setAPY={setUSDCoinUSDCAPY}
														eli={USDCoinUSDCEli}
														setEli={setUSDCoinUSDCEli}
														pen={USDCoinUSDCPen}
														setPen={setUSDCoinUSDCPen}
														initDataKeyAPY="usdCoinUSDCAPY"
														initDataKeyEli="usdCoinUSDCEli"
														initDataKeyPen="usdCoinUSDCPen"
														title={"USD Coin (USDC)"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={PAXDollarPAXAPY}
														setAPY={setPAXDollarPAXAPY}
														eli={PAXDollarPAXEli}
														setEli={setPAXDollarPAXEli}
														pen={PAXDollarPAXPen}
														setPen={setPAXDollarPAXPen}
														initDataKeyAPY="paxDollarPAXAPY"
														initDataKeyEli="paxDollarPAXEli"
														initDataKeyPen="paxDollarPAXPen"
														title={"PAX Dollar (PAX)"}
													/>
												</div>
											</div>
										</div>
									</div>
									<div
										id="polygon-page-content"
										role="tabpanel"
										aria-labelledby="polygon-tab"
									></div>
									<div
										id="avalanche-page-content"
										role="tabpanel"
										aria-labelledby="avalanche-tab"
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Modal */}

			<div
				className="modal fade"
				id="amendPopup"
				tabIndex="-1"
				aria-labelledby="amendPopup"
				aria-hidden="true"
				data-bs-backdrop="static"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-body rel">
							<button
								type="button"
								className="closebtn"
								data-bs-dismiss="modal"
								aria-label="Close"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M11 17l-5-5m0 0l5-5m-5 5h12"
									/>
								</svg>
							</button>
							<div className="heading-text-popupm">
								<h5 className="my-3 text-center ">MsDoge Staking Amendment</h5>
								<form action="">
									<div className="input-bal">
										<div className="row pl-4 pr-4">
											{/* <div className="mt-3 col-sm-12 d-flex justify-content-between">
                                        <div className="p-2"><b>MsDoge APY% </b></div>
                                        <div className="p-2"><small>2</small></div>
                                    </div> */}
											<div className="col-sm-12">
												<div className="p-2 stake-btn">
													<button
														type="button"
														className="table-btn btn py-2 px-4 w-100 mb-3"
														onClick={changeItem}
													>
														Amend
													</button>
													<div
														className="claim-btn-failed color5 py-2 px-4 w-100 text-center"
														onClick={() => setActiveItem(-1)}
														data-bs-dismiss="modal"
													>
														Cancel
													</div>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</React.Fragment>
	);
};

export default AdminDashboard;
