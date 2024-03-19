import { GameService } from '../service/game.service.js';

const gameService = new GameService();
const tbody = document.querySelector('#listGames');

gameService.getAll(tbody);