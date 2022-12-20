// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/utils/Strings.sol';

contract MustangCorp is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter private tokenId;
    uint256 public constant supply = 10;
    string public baseTokenURI;

    constructor(string memory _baseTokenURI) ERC721('MustangCorp', 'MTC') {
        baseTokenURI = _baseTokenURI;
    }

    function mint() external onlyOwner {
        require(tokenId.current() > 0, 'The collection has already been minted');

        for (uint256 i = 0; i < supply; i++) {
            uint256 newTokenId = tokenId.current();
            _mint(msg.sender, newTokenId);
            tokenId.increment();
        }
    }

    function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
        require(_exists(_tokenId), 'ERC721Metadata: URI query for nonexistent token');
        return string(abi.encodePacked(baseTokenURI, _tokenId.toString()));
    }
}
