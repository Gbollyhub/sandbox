<template>
    <div class="modal">
        <div class="modal-div">
            <img v-if="status == 'failed'" src="../../assets/failed-icon.svg" alt="failed-icon">
            <img v-if="status == 'success'" src="../../assets/success-icon.svg" alt="failed-icon">
            <br>
            <div class="modal-text">{{response}}</div>
            <br><br> 
            <div class="close-section">
             <div class="close-btn" @click="closeModal">
                Close
            </div>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    props: ['status', 'response', 'closeModal']
}
</script>

<style scoped>

.close-btn{cursor:pointer;border-radius: 5px; background: #c00;padding: 10px; width: 200px;text-align: center;color:white}
.modal-text{ font-weight: 600;margin-top:50px;font-size:13px}
.modal{
    height: 100%;
    width: 100%;
    z-index: 999;
    background: rgba(0, 0, 0, 0.421);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-div{
    background: white;
    width: 40%;
    height: 300px;
    border-radius: 10px;
    padding: 50px;
    text-align: center;
        display: flex;
        flex-direction: column;
    justify-content: center;
    align-items: center;

}
</style>