import styles from './Contact.module.css'

function Contact() {
    return (
        <div className={styles.geral}>
            <div className={styles.header}>
                <h1 className={styles.title}>Costs</h1>
                <h2 className={styles.subtitle}>Contato</h2>
            </div>
            
            <div className={styles.section}>
                <p className={styles.tagline}><strong>Estamos aqui para ajudar no seu próximo projeto</strong></p>
                <p className={styles.text}>Tem dúvidas, sugestões ou precisa de suporte? Entre em contato conosco através dos canais abaixo ou preencha o formulário.</p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Informações de Contato</h2>
                <ul className={styles.contactList}>
                    <li className={styles.contactItem}>
                        <span className={styles.contactLabel}>Email:</span> contato@costs.com.br
                    </li>
                    <li className={styles.contactItem}>
                        <span className={styles.contactLabel}>Telefone:</span> (11) 98765-4321
                    </li>
                    <li className={styles.contactItem}>
                        <span className={styles.contactLabel}>Endereço:</span> Av. Paulista, 1000 - São Paulo/SP
                    </li>
                    <li className={styles.contactItem}>
                        <span className={styles.contactLabel}>Horário:</span> Seg-Sex: 9h às 18h
                    </li>
                </ul>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Formulário de Contato</h2>
                <form className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.formLabel}>Nome:</label>
                        <input type="text" id="name" className={styles.formInput} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>Email:</label>
                        <input type="email" id="email" className={styles.formInput} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.formLabel}>Mensagem:</label>
                        <textarea id="message" rows="5" className={styles.formTextarea}></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>Enviar Mensagem</button>
                </form>
            </div>
        </div>
    )
}

export default Contact