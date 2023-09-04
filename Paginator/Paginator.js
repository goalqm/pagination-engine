const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

class Pagination {
	constructor(pages, buttons = ['◀️', '▶️'], timeout = 47000) {
		this.pages = pages;
		this.buttons = buttons;
		this.timeout = timeout;
		this.currentPage = 0;
	}

	embed() {
		return this.pages[this.currentPage];
	}

	buttonsRow() {
		const row = new MessageActionRow();

		if (this.currentPage > 0) {
			row.addComponents(
				new MessageButton()
					.setCustomId('prev')
					.setEmoji(this.buttons[0])
					.setStyle('SECONDARY')
			);
		} else {
			row.addComponents(
				new MessageButton()
					.setCustomId('prev')
					.setEmoji(this.buttons[0])
					.setStyle('SECONDARY')
					.setDisabled(true)
			);
		}

		if (this.currentPage < this.pages.length - 1) {
			row.addComponents(
				new MessageButton()
					.setCustomId('next')
					.setEmoji(this.buttons[1])
					.setStyle('SECONDARY')
			);
		} else {
			row.addComponents(
				new MessageButton()
					.setCustomId('next')
					.setEmoji(this.buttons[1])
					.setStyle('SECONDARY')
					.setDisabled(true)
			);
		}

		return row;
	}

	async send(message) {
		const msg = await message.channel.send({
			embeds: [this.embed()],
			components: [this.buttonsRow()],
		});

		const filter = (interaction) => {
			return (
				interaction.isButton() &&
				interaction.user.id === message.author.id
			);
		};

		const collector = msg.createMessageComponentCollector({
			filter,
			time: this.timeout,
		});

		collector.on('collect', async (interaction) => {
			await interaction.deferUpdate();

			if (interaction.customId === 'prev') {
				if (this.currentPage > 0) {
					this.currentPage--;
				}
			} else if (interaction.customId === 'next') {
				if (this.currentPage < this.pages.length - 1) {
					this.currentPage++;
				}
			}

			await msg.edit({
				embeds: [this.embed()],
				components: [this.buttonsRow()],
			});
		});

		collector.on('end', () => {
			msg.edit({
				components: [],
			});
		});
	}
}

module.exports = Pagination;
