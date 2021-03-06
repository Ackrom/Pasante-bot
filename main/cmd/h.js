function def(cmd, user, users, bot, channelID, evt){
	let args = cmd.substring(1).split(' ');
	let command = args[1];
	let response = "";
	let content = "";
	
	if (command == null){
		bot.sendMessage({
			to: channelID,
			message: 'Buenos días a todos, soy pasante en este server porque necesito la experiencia para el currículum. Cualquier duda:',
			embed:{    
				color: 16749596,	
				title: "Pasante Bot",
				fields: [
					{
						name: "Lista de comandos:",
						value: "cafe\ncambio\ncrypto\ndefine\ndolar\nayuda\nmarico\nsearch\ntime\nyt"
					},
					{
						name: "¿Ayuda más específica?",
						value: "Usa el comando **!ayuda** seguido del nombre del comando que vayas a usar:\n\n!ayuda dolar\n!ayuda def\n..."
					}
				],
						
			}
		});
		
	}else{
		
		switch(Math.floor(Math.random()*5)+1){
			case 1:
				response = "Bueno manao, así es el beta.";
			break;
			case 2:
				response = "Así es como se usa el comando que pediste.";
			break;
			case 3:
				response = "El comando se usa de la siguiente manera.";
			break;
			case 4:
				response = "El comando tiene estas instrucciones.";
			break;
			case 5:
				response = "El betulio es así manaurem.";
			break;
			case 6:
				response = "Así es como se hace la vaina, menor.";
			break;
		}
		
		switch(command.toUpperCase()){
			case "H":
				bot.sendMessage({
					to: channelID,
					message: response,
					embed:{    
						color: 16749596,	
						title: "!ayuda / !h",
						fields: [
							{
								name: "Descripción:",
								value: "Se usa para visualizar información referente a los comandos del bot."
							},
							{
								name: "Uso:",
								value: "!ayuda\n!ayuda [nombre del comando]"
							},
							{
								name: "Ejemplos:",
								value: "Traer información del comando def:\n!ayuda def\n\nTraer información del comando dolar:\n!ayuda dolar"
							}
						],
						
					}
				}, function(error, response){console.log(error);});
			break;
			
			case "AYUDA":
				bot.sendMessage({
					to: channelID,
					message: response,
					embed:{    
						color: 16749596,	
						title: "!ayuda / !h",
						fields: [
							{
								name: "Descripción:",
								value: "Se usa para visualizar información referente a los comandos del bot."
							},
							{
								name: "Uso:",
								value: "!ayuda\n!ayuda [nombre del comando]"
							},
							{
								name: "Ejemplos:",
								value: "Traer información del comando def:\n!ayuda def\n\nTraer información del comando dolar:\n!ayuda dolar"
							}
						],
						
					}
				}, function(error, response){console.log(error);});
			break;
			
			case "YT":
				bot.sendMessage({
					to: channelID,
					message: response,
					embed:{    
						color: 16749596,	
						title: "!yt",
						fields: [
							{
								name: "Descripción:",
								value: "Busca un vídeo en Youtube y coloca el link."
							},
							{
								name: "Uso:",
								value: "!yt [query]"
							},
							{
								name: "Ejemplos:",
								value: "Buscar un vídeo de programación:\n!yt programacion"
							}
						],
						
					}
				}, function(error, response){console.log(error);});
			break;
			
			case "MRC":
				bot.sendMessage({
					to: channelID,
					message: response,
					embed:{    
						color: 16749596,	
						title: "!marico / !mrc",
						fields: [
							{
								name: "Descripción:",
								value: "Cuenta un secreto que solo Pasante sabe."
							},
							{
								name: "Uso:",
								value: "!marico"
							}
						],
						
					}
				}, function(error, response){console.log(error);});
			break;
			
			case "MARICO":
				bot.sendMessage({
					to: channelID,
					message: response,
					embed:{    
						color: 16749596,	
						title: "!marico / !mrc",
						fields: [
							{
								name: "Descripción:",
								value: "Cuenta un secreto que solo Pasante sabe."
							},
							{
								name: "Uso:",
								value: "!mrc"
							}
						],
						
					}
				}, function(error, response){console.log(error);});
			break;
			
			case "DOLAR":
				bot.sendMessage({
					to: channelID,
					message: response,
					embed:{    
						color: 16749596,	
						title: "!dolar",
						fields: [
							{
								name: "Descripción:",
								value: "Consulta la tasa de cambio actual de AirTM y DolarToday."
							},
							{
								name: "Uso:",
								value: "!dolar"
							}
						],
						
					}
				}, function(error, response){console.log(error);});
			break;
			
			case "CN":
				bot.sendMessage({
					to: channelID,
					message: response,
					embed:{    
						color: 16749596,	
						title: "!cambio / !cn",
						fields: [
							{
								name: "Descripción:",
								value: "Convierte USD a VES (o vice versa) usando las tasas de cambio de AirTM y DolarToday."
							},
							{
								name: "Uso:",
								value: "!cambio [B o D] [monto]"
							},
							{
								name: "Ejemplos:",
								value: "Si quiero convertir $10 a Bolívares Soberanos (VES):\n!cambio d 10\n\nSi quiero convertir 500 Bolívares Soberanos a Dólar (USD):\n!cambio b 500"
							}
						],
						
					}
				}, function(error, response){console.log(error);});
			break;
			
			case "CAMBIO":
				bot.sendMessage({
					to: channelID,
					message: response,
					embed:{    
						color: 16749596,	
						title: "!cambio / !cn",
						fields: [
							{
								name: "Descripción:",
								value: "Convierte USD a VES (o vice versa) usando las tasas de cambio de AirTM y DolarToday."
							},
							{
								name: "Uso:",
								value: "!cambio [B o D] [monto]"
							},
							{
								name: "Ejemplos:",
								value: "Si quiero convertir $10 a Bolívares Soberanos (VES):\n!cambio d 10\n\nSi quiero convertir 500 Bolívares Soberanos a Dólar (USD):\n!cambio b 500"
							}
						],
						
					}
				}, function(error, response){console.log(error);});
			break;
			
			case "DEF":
				bot.sendMessage({
					to: channelID,
					message: response,
					embed:{    
						color: 16749596,	
						title: "!define / !def",
						fields: [
							{
								name: "Descripción:",
								value: "Busca un artículo en la Wikipedia en **Inglés**, y muestra una pequeña definición con el link al artículo."
							},
							{
								name: "Uso:",
								value: "!define [palabra o frase]"
							},
							{
								name: "Ejemplos:",
								value: "Si busco a Venezuela:\n!define venezuela\n\nSi busco algo relacionado con software, como Docker:\n!define docker software"
							}
						],
						
					}
				}, function(error, response){console.log(error);});
			break;
			
			case "DEFINE":
				bot.sendMessage({
					to: channelID,
					message: response,
					embed:{    
						color: 16749596,	
						title: "!define / !def",
						fields: [
							{
								name: "Descripción:",
								value: "Busca un artículo en la Wikipedia en **Inglés**, y muestra una pequeña definición con el link al artículo."
							},
							{
								name: "Uso:",
								value: "!define [palabra o frase]"
							},
							{
								name: "Ejemplos:",
								value: "Si busco a Venezuela:\n!define venezuela\n\nSi busco algo relacionado con software, como Docker:\n!define docker software"
							}
						],
						
					}
				}, function(error, response){console.log(error);});
			break;
			
			case "CR":
				bot.sendMessage({
					to: channelID,
					message: response,
					embed:{    
						color: 16749596,	
						title: "!crypto / !cr",
						fields: [
							{
								name: "Descripción:",
								value: "Consulta las 10 mejores criptomonedas del mercado, o busca el valor de una criptomoneda en específico."
							},
							{
								name: "Uso:",
								value: "!crypto\n!crypto [moneda]"
							},
							{
								name: "Ejemplos:",
								value: "Si quiero la lista de las 10 mejores criptomonedas:\n!crypto\n\nSi busco una moneda en específico, uso el símbolo de la misma:\n!crypto BTC (para bitcoin)\n!crypto XMR (para monero)"
							}
						],
						
					}
				}, function(error, response){console.log(error);});
			break;
			
			case "CRYPTO":
				bot.sendMessage({
					to: channelID,
					message: response,
					embed:{    
						color: 16749596,	
						title: "!crypto / !cr",
						fields: [
							{
								name: "Descripción:",
								value: "Consulta las 10 mejores criptomonedas del mercado, o busca el valor de una criptomoneda en específico."
							},
							{
								name: "Uso:",
								value: "!crypto\n!crypto [moneda]"
							},
							{
								name: "Ejemplos:",
								value: "Si quiero la lista de las 10 mejores criptomonedas:\n!crypto\n\nSi busco una moneda en específico, uso el símbolo de la misma:\n!crypto BTC (para bitcoin)\n!crypto XMR (para monero)"
							}
						],
						
					}
				}, function(error, response){console.log(error);});
			break;
			
			case "TIME":
				bot.sendMessage({
					to: channelID,
					message: response,
					embed:{    
						color: 16749596,	
						title: "!time",
						fields: [
							{
								name: "Descripción:",
								value: "Muestra la fecha y hora actual de Venezuela"
							},
							{
								name: "Uso:",
								value: "!time"
							}
						],
						
					}
				}, function(error, response){console.log(error);});
			break;
			
			case "SEARCH":
				bot.sendMessage({
					to: channelID,
					message: response,
					embed:{    
						color: 16749596,	
						title: "!search",
						fields: [
							{
								name: "Descripción:",
								value: "Busca una imagen en Bing usando un query, y lo postea en el chat. **El SafeSearch está deshabilitado. Cuidado.**."
							},
							{
								name: "Uso:",
								value: "!search [query]"
							},
							{
								name: "Ejemplos:",
								value: "Si busco una imagen de Venezuela:\n!search Venezuela\n\nSi busco una película como Toy Story:\n!search toy story"
							}
						],
						
					}
				}, function(error, response){console.log(error);});
			break;
			
			case "CAFE":
				bot.sendMessage({
					to: channelID,
					message: response,
					embed:{    
						color: 16749596,	
						title: "!cafe",
						fields: [
							{
								name: "Descripción:",
								value: "Te trae un café imaginario."
							},
							{
								name: "Uso:",
								value: "!cafe"
							}
						],
						
					}
				}, function(error, response){console.log(error);});
			break;
			
			
			default:
				bot.sendMessage({
					to: channelID,
					message: "Lo siento, ese comando no lo conozco. Cuando firmé para la pasantía en este server, no me pidieron eso."
				});
			break;
		}
	}
	
};

module.exports.def = def;